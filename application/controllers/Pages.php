<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Pages extends CI_Controller {
	public function __construct(){
		parent::__construct();
		$this->load->helper(array('url', 'form')); 
		$this->load->model(array('users_model', 'products_another_model', 'genero_model', 'products_model', 'banners_model', 'faq_model', 'location_model'));
		$this->load->library(array('session','form_validation','cart', 'pagination', 'email'));
		$this->load->database('default');
	}

	public function become_a_member(){
		$data['title']="ReadyBPM";
		$data['djs']=$this->products_another_model->get_djs();
		$data['description']="Música para Djs y Vjs, los mejores remixes en un solo lugar";
		$data['paises']=$this->get_countries();
		$data['generos']=$this->genero_model->get_generos();
		$this->load->view('templates/header', $data);
		$this->load->view('become_a_member');
		$this->load->view('templates/footer', $data);
	}
	public function get_countries(){
		$countries = $this->location_model->get_countries(); 
		return $countries;
	}
	public function ser_miembro_mail(){
		$email = $this->input->post('email');
		$name = $this->input->post('name');
		$experience = $this->input->post('experience');
		$work = $this->input->post('work');
		$country = $this->input->post('country');
		$trabajos = $this->input->post('trabajos');
		$message = $this->input->post('message');
		
		$mensaje = "
		<table width='100%'>
		<tr>
		<td><strong>Nombre: </strong></td>
		<td>$name</td>
		</tr>
		<tr>
		<td><strong>E-mail: </strong></td>
		<td>$email</td>
		</tr>
		<tr>
		<td><strong>Experiencia: </strong></td>
		<td>$experience</td>
		</tr>
		<tr>
		<td><strong>País: </strong></td>
		<td>$country</td>
		</tr>
		<tr>
		<td><strong>¿Trabaja para otros sitios web?: </strong></td>
		<td>$work</td>
		</tr>
		<tr>
		<td><strong>Quiere pertenecer a VRP porque: </strong></td>
		<td>$message</td>
		</tr>
		<tr>
		<td><strong>Trabajos </strong></td>
		<td><a href=".$trabajos.">Ver</a></td>
		</tr>
		</table>
		";

        $config['protocol']    = 'smtp';
        $config['smtp_host']   = 'mail.readybpm.com';
        $config['smtp_port']   = 465;
        $config['smtp_crypto'] = 'ssl';
		$config['smtp_timeout'] = '30';
        $config['smtp_user']   = 'remixers@readybpm.com';
		$config['smtp_pass']   = '6+E;5@%IB7rA';
        $config['charset']     = 'utf-8';
		$config['newline']    = "\r\n";
		$config['mailtype'] = 'html';
		$config['validation'] = FALSE;
        $config['from_email']  = EMAIL_REMIXERS;
        $config['from_name']   = 'ReadyBPM';

		$this->email->initialize($config);
        $this->load->library('email');

        $this->email->from('remixers@readybpm.com', 'ReadyBPM');
        $destinatarios = [
            'remixers@readybpm.com',
            'readybpm@gmail.com'
        ];
        $this->email->to($destinatarios);

		$this->email->subject('DJ QUIERE SER MIEMBRO');
		
		$data['mensaje'] = $mensaje;
		
		$mail = $this->load->view('emails/become_member', $data, TRUE);
		$this->email->message($mail);
		
		$this->email->send();
		$jsondata['success'] = true;
		header('Content-type: application/json; charset=utf-8');
		echo json_encode($jsondata);
	}

	public function terms_conditions(){
		$data['title']="ReadyBPM";
		$data['djs']=$this->users_model->get_djs();
		$data['description']="Música para Djs y Vjs, los mejores remixes en un solo lugar";
		$data['paises']=$this->get_countries();
		$data['ocultar_caja_compatible']=true;
		$data['generos']=$this->genero_model->get_generos();

		$this->load->view('templates/header', $data);
		$this->load->view('terms_conditions');
		$this->load->view('templates/footer', $data);
		
	}

    public function notificar_compra_exitosa($orden_id) {
        $config['protocol']    = 'smtp';
        $config['smtp_host']   = 'mail.readybpm.com';
        $config['smtp_port']   = 465;
        $config['smtp_crypto'] = 'ssl';
        $config['smtp_user']   = 'payments@readybpm.com';
        $config['smtp_pass']   = 'C0uQSmtWVcK#';
        $config['smtp_timeout'] = 7;
        $config['charset']     = 'utf-8';
        $config['mailtype']    = 'html';
        $config['wordwrap']    = FALSE;
        $config['newline']     = "\r\n";
        $config['from_email']  = EMAIL_PAYMENTS;
        $config['from_name']   = 'ReadyBPM';

        // Cargar los modelos necesarios
        $this->load->model('orders_model');
        $this->load->model('users_model');

        // --- 1. RECOPILACIÓN DE DATOS ---
        // Obtener todos los detalles necesarios para la plantilla
        $orden = $this->orders_model->get_order_details($orden_id);
        $usuario = $this->users_model->load_user_info($orden->user_id);
        $items = $this->orders_model->get_order_items($orden_id); // Asumiendo que esta función existe en tu modelo

        // Si no se encuentran datos, detener para evitar errores
        if (!$orden || !$usuario || !$items) {
            log_message('error', 'No se pudieron obtener todos los datos para la notificación de la orden #' . $orden_id);
            return;
        }

        // Preparar el array de datos que se pasará a la vista
        $data['orden'] = $orden;
        $data['user'] = $usuario;
        $data['items'] = $items;
        $data['is_plan'] = true; // Indicar que es una compra de plan
        $data['renovacion'] = (isset($orden->is_renewal) && $orden->is_renewal == 1); // Ejemplo de cómo determinar si es renovación

        // --- 2. CARGA DE LA PLANTILLA Y ENVÍO ---

        // Definir los destinatarios
        $destinatarios = [
            EMAIL_PAYMENTS,
            'readybpm@gmail.com'
        ];

        // Cargar y configurar la librería de correo
        $this->load->library('email');
        $this->email->from(EMAIL_NOREPLY, 'Ventas ReadyBPM');
        $this->email->to($destinatarios);
        $this->email->subject("Nueva Venta de Plan: Orden #" . $orden->id);

        // Cargar la vista de la plantilla HTML en una variable
        $message_body = $this->load->view('emails/payment', $data, TRUE);

        // Establecer el cuerpo del mensaje con el HTML de la plantilla
        $this->email->message($message_body);

        // Enviar el correo
        if (!$this->email->send()) {
            log_message('error', 'Error al enviar correo de notificación de venta: ' . $this->email->print_debugger());
        }
    }
}
