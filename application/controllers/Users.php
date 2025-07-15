<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Users extends CI_Controller
{
    public function __construct()
    {
        parent::__construct();
        $this->load->helper(array('url' , 'form'));
        $this->load->library(array('session' , 'form_validation' , 'email'));
        $this->form_validation->set_error_delimiters('<div class="alert alert-danger" role="alert">' , '</div>');
        $this->load->model('users_model');
        $this->load->database('default');
        $this->load->model('location_model');
    }

    public function new_user()
    {
        $this->load->model('users_model');
        $this->form_validation->set_rules('email' , 'Email' , 'required|valid_email');
        $this->form_validation->set_rules('password' , 'Password' , 'required');
        $this->form_validation->set_rules('passwordrepeat' , 'Repetir Password' , 'required|matches[password]');
        if ($this->form_validation->run() == FALSE) {
            $this->print_nuevo_usuario();
        } else {
            $username = $this->input->post('username');
            $email = $this->input->post('email');
            $country = $this->input->post('country_id');
            $role_id = $this->input->post('role_id');
            $password = $this->input->post('password');
            $encriptedpass = password_hash($password , PASSWORD_BCRYPT);
            $percentage = $this->input->post('percentage');
            $fecha_registro = date('Y-m-d');

            $data = array(
                'username' => $username ,
                'email' => $email ,
                'country_id' => $country ,
                'role_id' => $role_id ,
                'password' => $encriptedpass ,
                'percentage' => $percentage ,
                'active' => 0 ,
                'registered_on' => $fecha_registro
            );
            $id = $this->users_model->create_user($data);
            $this->print_editar_usuario($id);

        }
    }

    public function registro()
    {
        $username = $this->input->post('username');
        $email = $this->input->post('email');
        $role_id = 4;
        $password = $this->input->post('password');
        $encriptedpass = password_hash($password , PASSWORD_BCRYPT);
        $whereemail['email'] = $email;
        $whereusername['username'] = $username;
        if (!$this->users_model->get_user_where($whereemail)) {
            if (!$this->users_model->get_user_where($whereusername)) {
                $token = $this->token();
                $fecha_registro = date('Y-m-d');
                $data = array(
                    'username' => $username ,
                    'email' => $email ,
                    'role_id' => $role_id ,
                    'password' => $encriptedpass ,
                    'activationcode' => $token ,
                    'registered_on' => $fecha_registro ,
                    'active' => 1
                );
                $id = $this->users_model->create_user($data);
                // $this->send_registered_mail($email, $token);
                $jsondata['respuesta'] = "ok";

                header('Content-type: application/json; charset=utf-8');
                echo json_encode($jsondata);
            } else {
                $jsondata['respuesta'] = "username_existe";
                header('Content-type: application/json; charset=utf-8');
                echo json_encode($jsondata);
            }
        } else {
            $jsondata['respuesta'] = "email_existe";
            header('Content-type: application/json; charset=utf-8');
            echo json_encode($jsondata);
        }
    }

    public function print_nuevo_usuario()
    {
        $data['roles'] = $this->users_model->get_roles();
        $data['title'] = "Añadir Usuario";
        $data['description'] = "Añade usuarios manualmente al sitio ";
        $data['paises'] = $this->get_countries();
        $this->load->view('admin/head' , $data);
        $this->load->view('admin/side');
        $this->load->view('admin/top');
        $this->load->view('admin/nuevo_usuario');
        $this->load->view('admin/footer');
    }

    public function update_user()
    {
        $this->load->model('users_model');
        $id = $this->input->post('user_id');
        $this->form_validation->set_rules('email' , 'Email' , 'required|valid_email');
        if ($this->form_validation->run() == FALSE) {
            $this->print_editar_usuario($id);
        } else {
            $user_info = $this->users_model->load_user_info($id);
            $username = $this->input->post('username');
            $email = $this->input->post('email');
            $country = $this->input->post('country_id');
            $percentage = $this->input->post('percentage');

            $role_id = $this->input->post('role_id');
            $password = $this->input->post('password');
            $passwordrepeat = $this->input->post('passwordrepeat');
            $data = array(
                'username' => $username ,
                'email' => $email ,
                'country_id' => $country ,
                'role_id' => $role_id ,
                'percentage' => $percentage
            );
            if ($password != "" || $passwordrepeat != "") {
                if ($user_info->password != $password) {
                    if ($password == $passwordrepeat) {
                        $encriptedpass = password_hash($password , PASSWORD_BCRYPT);
                        $data['password'] = $encriptedpass;
                        $mensaje = "Usuario actualizado con exito.";
                        $this->print_editar_usuario($id , $mensaje);
                    } else {
                        $mensaje = "Password deben ser iguales.";
                        $this->print_editar_usuario($id , $mensaje);
                    }
                }
            } else {
                $mensaje = "Campos de password son obligatorios.";
                $this->print_editar_usuario($id , $mensaje);
            }

            $this->users_model->update_user($id , $data);

        }
    }

    public function print_editar_usuario($user_id , $mensaje = NULL)
    {
        if ($this->user_has_admin_access()) {
            $data['title'] = "Actualizar Usuario";
            $data['description'] = "Aquí podrás editar tu información";
            $user_info = $this->users_model->load_user_info($user_id);
            $data['usuario'] = $user_info;
            //$data['token']=$this->token();
            $data['paises'] = $this->get_countries();

            if (!is_null($mensaje)) {
                $data['mensaje'] = $mensaje;
            }
            $data['roles'] = $this->users_model->get_roles();

            $this->load->view('admin/head' , $data);
            $this->load->view('admin/side');
            $this->load->view('admin/top');
            $this->load->view('admin/editar_usuario');
            $this->load->view('admin/footer');
        } else {
            redirect(base_url());
        }

    }

    public function user_has_admin_access()
    {
        switch ($this->session->userdata('role')) {
            case "is_admin":
                return true;
                break;
            case "is_subadmin":
                return true;
                break;
            case "is_editor":
                return true;
                break;
            case "is_normal":
                return false;
                break;
        }
        return false;
    }

    public function editar_perfil()
    {
        $id = $this->session->id_usuario;
        $this->form_validation->set_rules('email' , 'Email' , 'required|valid_email');
        if ($this->form_validation->run() == FALSE) {
            $data['title'] = "Actualizar Usuario";
            $data['description'] = "Aquí podrás editar tu información";
            $user_info = $this->users_model->load_user_info($this->session->id_usuario);
            $data['user_info'] = $user_info;
            $data['paises'] = $this->get_countries();
            $this->load->view('admin/head' , $data);
            $this->load->view('admin/side');
            $this->load->view('admin/top');
            $this->load->view('admin/editar_perfil');
            $this->load->view('admin/footer');
        } else {
            $firstname = $this->input->post('firstname');
            $lastname = $this->input->post('lastname');
            $email = $this->input->post('email');
            $address = $this->input->post('address');
            $city = $this->input->post('city');
            $country = $this->input->post('country');
            $phone = $this->input->post('phone');
            if (!file_exists($_FILES['profile_img']['tmp_name']) || !is_uploaded_file($_FILES['profile_img']['tmp_name'])) {
                $data = array(
                    'first_name' => $firstname ,
                    'last_name' => $lastname ,
                    'email' => $email ,
                    'address' => $address ,
                    'city' => $city ,
                    'country_id' => $country ,
                    'phone' => $phone
                );
                $this->users_model->update_user($id , $data);
                $data['title'] = "Actualizar Usuario";
                $data['description'] = "Aquí podrás editar tu información";
                $user_info = $this->users_model->load_user_info($this->session->id_usuario);
                $data['user_info'] = $user_info;
                //$data['token']=$this->token();
                $data['paises'] = $this->get_countries();

                $data['mensaje'] = "El usuario ha sido actualizado";
                $user_info = $this->users_model->load_user_info($this->session->id_usuario);
                $data['user_info'] = $user_info;
                $this->load->view('admin/head' , $data);
                $this->load->view('admin/side');
                $this->load->view('admin/top');
                $this->load->view('admin/editar_perfil');
                $this->load->view('admin/footer');
            } else {
                $image_folder = 'images/users/profile_img/';
                $temp = explode("." , $_FILES["profile_img"]["name"]);
                $newfilename = round(microtime(true)) . '.' . end($temp);
                $image_file = $image_folder . basename($_FILES['profile_img']['name']);

                if ($_FILES['profile_img']['error'] !== UPLOAD_ERR_OK) {
                    die("Upload failed with error code " . $_FILES['profile_img']['error']);
                }

                $info = getimagesize($_FILES['profile_img']['tmp_name']);
                if ($info === FALSE) {
                    die("Unable to determine image type of uploaded file");
                }

                if (($info[2] !== IMAGETYPE_GIF) && ($info[2] !== IMAGETYPE_JPEG) && ($info[2] !== IMAGETYPE_PNG)) {
                    die("Not a gif/jpeg/png");
                }
                if (move_uploaded_file($_FILES['profile_img']['tmp_name'] , $image_folder . $newfilename)) {


                    $data = array(
                        'first_name' => $firstname ,
                        'last_name' => $lastname ,
                        'email' => $email ,
                        'address' => $address ,
                        'city' => $city ,
                        'country_id' => $country ,
                        'phone' => $phone ,
                        'profile_img' => $newfilename ,
                    );
                    $this->users_model->update_user($id , $data);
                    $data['title'] = "Actualizar Usuario";
                    $data['description'] = "Aquí podrás editar tu información";
                    $user_info = $this->users_model->load_user_info($this->session->id_usuario);
                    $data['user_info'] = $user_info;
                    //$data['token']=$this->token();
                    $data['paises'] = $this->get_countries();

                    $data['mensaje'] = "El usuario ha sido actualizado";
                    $user_info = $this->users_model->load_user_info($this->session->id_usuario);
                    $data['user_info'] = $user_info;
                    $this->load->view('admin/head' , $data);
                    $this->load->view('admin/side');
                    $this->load->view('admin/top');
                    $this->load->view('admin/editar_perfil');
                    $this->load->view('admin/footer');
                }
            }
        }
    }

    public function actualizar_password()
    {
        $id = $this->session->id_usuario;
        $this->form_validation->set_rules('password' , 'Password' , 'required');
        $this->form_validation->set_rules('passwordrepeat' , 'Repetir Password' , 'required|matches[password]');
        if ($this->form_validation->run() == FALSE) {
            $data['title'] = "Cambiar Contraseña";
            $data['description'] = "Aquí podrás editar tu contraseña";
            $user_info = $this->users_model->load_user_info($this->session->id_usuario);
            $data['user_info'] = $user_info;
            $this->load->view('admin/head' , $data);
            $this->load->view('admin/side');
            $this->load->view('admin/top');
            $this->load->view('admin/cambiar_pass');
            $this->load->view('admin/footer');
        } else {
            $pass = $this->input->post('password');
            $repeat = $this->input->post('passwordrepeat');
            $encriptedpass = password_hash($pass , PASSWORD_BCRYPT);
            $data = array(
                'password' => $encriptedpass ,
            );
            $this->users_model->update_user($id , $data);
            $data['title'] = "Cambiar Contraseña";
            $data['description'] = "Aquí podrás editar tu contraseña";
            $data['mensaje'] = "Tu contraseña ha sido actualizada";
            $user_info = $this->users_model->load_user_info($this->session->id_usuario);
            $data['user_info'] = $user_info;
            $this->load->view('admin/head' , $data);
            $this->load->view('admin/side');
            $this->load->view('admin/top');
            $this->load->view('admin/cambiar_pass');
            $this->load->view('admin/footer');
        }
    }

    public function token()
    {
        $token = base64_encode(random_bytes(18));
        $token = strtr($token , '+/' , '-_');
        return $token;
    }

    public function get_countries()
    {
        $countries = $this->location_model->get_countries();
        return $countries;
    }

    public function changepass()
    {
        $pass = $this->input->post('pass');
        $rpass = $this->input->post('rpass');
        $id = $this->input->post('id');

        if ($pass == $rpass) {
            //echo 'entro';
            $encriptedpass = password_hash($pass , PASSWORD_BCRYPT);
            $data = array(
                'password' => $encriptedpass ,
            );
            $this->users_model->update_user($id , $data);
            $jsondata['success'] = true;
            header('Content-type: application/json; charset=utf-8');
            echo json_encode($jsondata);
        } else {
            $jsondata['success'] = false;
            header('Content-type: application/json; charset=utf-8');
            echo json_encode($jsondata);
        }
    }

    public function send_registered_mail($email , $token)
    {

        $config['protocol'] = 'smtp';
        $config['smtp_host'] = SMTP_URL;
        $config['smtp_port'] = SMTP_PORT;
        $config['smtp_timeout'] = '7';
        $config['smtp_user'] = SMTP_USER;
        $config['smtp_pass'] = SMTP_KEY;
        $config['charset'] = 'utf-8';
        $config['newline'] = "\r\n";
        $config['mailtype'] = 'html'; // or html
        $config['validation'] = TRUE; // bool whether to validate email or not

        $this->email->initialize($config);

        $this->email->from('dalemasbajo@gmail.com' , 'Video Remix Pool');

        $this->email->to($email);

        $this->email->subject('Confirma tu Correo');

        $data['token'] = $token;
        $data['email'] = $email;

        $mail = $this->load->view('emails/confirmaccount' , $data , TRUE);
        $this->email->message($mail);

        $this->email->send();
        return;
    }


}