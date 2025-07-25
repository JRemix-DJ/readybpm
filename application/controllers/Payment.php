<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Payment extends CI_Controller {
	public function __construct(){
		parent::__construct();
		$this->load->helper(array('url', 'form')); 
		$this->load->model(array('users_model', 'genero_model', 'products_model', 'banners_model', 'faq_model', 'orders_model', 'plan_model'));
		$this->load->library(array('session','form_validation', 'email'));
		$this->load->database('default');
	}

	public function index()
	{
		$data['title']="Payment - ReadyBPM";
		$data['description']="Detalles de tu pago";
		$data['products']=$this->products_model->get_products();
		$data['generos']=$this->genero_model->get_generos();
		$data['users']=$this->users_model->get_all_users();
		$data['djs']=$this->users_model->get_djs();
		$this->load->view('templates/header', $data);
		$this->load->view('payment');
		$this->load->view('templates/footer', $data);
	}

    /**
     * Página de "Gracias": A esta página es redirigido el usuario después de pagar.
     * URL: http://tusitio.com/payment/tukuy_finalizado
     */
    public function tukuy_finalizado()
    {
        $data['title'] = "Pago Finalizado - ReadyBPM";
        $data['description'] = "Gracias por tu compra.";
        $data['generos'] = $this->genero_model->get_gender();

        $this->load->view('templates/header', $data);
        $this->load->view('finalizado');
        $this->load->view('templates/footer', $data);
    }

	public function aplicar_orden(){
		if($this->session->userdata('is_logued_in')){
			if($this->user_has_admin_access()){
				$order_id=$_GET['order_id'];
				$renovacion = (isset($_GET['renovacion'])) ? $_GET['renovacion'] : 0 ;
				$order = $this->orders_model->load_order_info($order_id);
				if($renovacion){
					$this->add_payment_to_owner($order_id);
					$this->add_tokens_to_user($order_id);
					$this->send_notification_mail($order_id, $renovacion = 1);
					echo "La orden ".$order_id." fue renovada correctamente";
				}else if ($order->txn_id != "MANUAL") {
					$data['txn_id']='MANUAL';
					$this->orders_model->update_order($order_id, $data);
					$this->add_payment_to_owner($order_id);
					$this->add_tokens_to_user($order_id);
					$this->send_notification_mail($order_id, $renovacion = 0);
					echo "La orden ".$order_id." fue aplicada correctamente";
				}
			}
		}
	}

	public function user_has_admin_access(){
		switch($this->session->userdata('role')){
			case "is_admin":
				return true;
				break;
			case "is_subadmin":
				return true;
				break;
		}
		return false;
	}

	public function cancelar(){
		$data['title']="Pago Cancelado - ReadyBPM";
		$data['description']="Detalles de tu pago";
		$data['products']=$this->products_model->get_products();
		$data['generos']=$this->genero_model->get_generos();
		$data['users']=$this->users_model->get_all_users();
		$data['djs']=$this->users_model->get_djs();
		$this->load->view('templates/header', $data);
		$this->load->view('cancelado');
		$this->load->view('templates/footer', $data);
	}

	public function plan_cancelar(){
		$data['title']="Pago Cancelado - ReadyBPM";
		$data['description']="Detalles de tu pago";
		$data['products']=$this->products_model->get_products();
		$data['generos']=$this->genero_model->get_generos();
		$data['users']=$this->users_model->get_all_users();
		$data['djs']=$this->users_model->get_djs();
		$this->load->view('templates/header', $data);
		$this->load->view('cancelado');
		$this->load->view('templates/footer', $data);
	}


	public function finalizado(){
		$this->session->unset_userdata('cart');
		$data['title']="Pago Finalizado - ReadyBPM";
		$data['description']="Detalles de tu pago";
		$data['products']=$this->products_model->get_products();
		$data['generos']=$this->genero_model->get_generos();
		$data['users']=$this->users_model->get_all_users();
		$data['djs']=$this->users_model->get_djs();
		$this->load->view('templates/header', $data);
		$this->load->view('finalizado');
		$this->load->view('templates/footer', $data);
	}

	public function plan_finalizado(){
		//$this->session->unset_userdata('cart');
		$data['title']="Pago Finalizado - ReadyBPM";
		$data['description']="Detalles de tu pago";
		$data['products']=$this->products_model->get_products();
		$data['generos']=$this->genero_model->get_generos();
		$data['users']=$this->users_model->get_all_users();
		$data['djs']=$this->users_model->get_djs();
		$this->load->view('templates/header', $data);
		$this->load->view('finalizado');
		$this->load->view('templates/footer', $data);
	}

	public function realizado(){
		$this->session->unset_userdata('cart');
		$req = 'cmd=_notify-validate';
		foreach ($_POST as $key => $value) {
			$value = urlencode(stripslashes($value));
			$value = preg_replace('/(.*[^%^0^D])(%0A)(.*)/i','${1}%0D%0A${3}',$value);// IPN fix
			$req .= "&$key=$value";
		}
		if(isset($_POST['custom'])){
			$order_id= $_POST['custom'];
		}
		$order = $this->orders_model->load_order_info($order_id);


		if($order->status==0){
			$data['status']=1;

			$header = "POST /cgi-bin/webscr HTTP/1.0\r\n";
			$header .= "Content-Type: application/x-www-form-urlencoded\r\n";
			$header .= "Content-Length: " . strlen($req) . "\r\n\r\n";
			
			
			$this->orders_model->update_order($order_id, $data);
			$this->add_payment_to_owner($order_id);
			$this->add_items_to_user($order_id);
			$this->send_notification_mail($order_id);
		}else{

		}	
	}

	public function plan_realizado(){
		if ( ! count($_POST)) {
            throw new Exception("Missing POST Data");
        }
		$req = 'cmd=_notify-validate';
		foreach ($_POST as $key => $value) {
			$value = urlencode(stripslashes($value));
			$value = preg_replace('/(.*[^%^0^D])(%0A)(.*)/i','${1}%0D%0A${3}',$value);// IPN fix
			$req .= "&$key=$value";
		}
		if(isset($_POST['custom'])){
			$order_id= $_POST['custom'];
		}
		$order = $this->orders_model->load_order_info($order_id);

		// $config['protocol']    = 'smtp';
		// $config['smtp_host']    = 'ssl://smtp.mailgun.org';
		// $config['smtp_port']    = '465';
		// $config['smtp_timeout'] = '7';
		// $config['smtp_user']    = 'admin@remixmp4.com';
		// $config['smtp_pass']    = 'asdK33AA';
		// $config['charset']    = 'utf-8';
		// $config['newline']    = "\r\n";
		// $config['mailtype'] = 'text'; // or html
		// $config['validation'] = TRUE; // bool whether to validate email or not      

		// $this->email->initialize($config);

		// $this->email->from('web@videoremixpool.com', 'VRP');
		// $this->email->to('o.reyes@shiftandcontrol.com');
		// $text = file_get_contents("php://input");
		// $this->email->subject('INFO IPN');
		// $this->email->message($text);
		// $this->email->send();

		//print_r($order);
		if($order->status==0 && $_POST['payment_status']=='Completed'){
			$data['status']=1;
			$data['txn_id']=$_POST['txn_id'];

			$header = "POST /cgi-bin/webscr HTTP/1.0\r\n";
			$header .= "Content-Type: application/x-www-form-urlencoded\r\n";
			$header .= "Content-Length: " . strlen($req) . "\r\n\r\n";
			
			
			$this->orders_model->update_order($order_id, $data);
			$this->add_tokens_to_user($order_id);
			$this->send_notification_mail($order_id);
		}else{
			$ipnsentbefore = $this->orders_model->get_by_txn_id($_POST['txn_id']);
			if(!$ipnsentbefore && $_POST['payment_status']=='Completed'){
				$plan_id=$order->plan_id;
				$plan=$this->plan_model->load_plan_info($plan_id);
				$data_order = array(
					'user_id'		=>	$order->user_id,
					'date_order'	=> 	date("Y-m-d H:i:s"),
					'total_price'	=> 	$plan->price,
					'status'		=> 	1,
					'is_plan'		=>	1,
					'plan_id'		=>	$plan->id,
					'txn_id'		=> 	$_POST['txn_id']
				);
				$order_id = $this->orders_model->create_order_plan($data_order);
				$renovacion=1;
				$this->add_tokens_to_user($order_id, $renovacion);
				$this->send_notification_mail($order_id);
			}
		}	
	}

	function test_admin($txn_id='oscareyes071313'){
		$order = $this->orders_model->load_order_info(967);
		$ipnsentbefore = $this->orders_model->get_by_txn_id($txn_id);
		$txn_id2 = $txn_id.'new';
		if(!$ipnsentbefore){
			$plan_id=$order->plan_id;
			$plan=$this->plan_model->load_plan_info($plan_id);
			$data_order = array(
				'user_id'		=>	$order->user_id,
				'date_order'	=> 	date("Y-m-d H:i:s"),
				'total_price'	=> 	$plan->price,
				'status'		=> 	1,
				'is_plan'		=>	1,
				'plan_id'		=>	$plan->id,
				'txn_id'		=> 	$txn_id2
			);
			$order_id = $this->orders_model->create_order_plan($data_order);
			$renovacion=1;
			$this->add_tokens_to_user($order_id, $renovacion);
			$this->send_notification_mail($order_id);
		}else{
			echo 'error';
		}
	}

	function add_tokens_to_user_admin($order_id=967, $renovacion=1){
		$order = $this->orders_model->load_order_info($order_id);
		$plan = $this->plan_model->load_plan_info($order->plan_id);
		$plus_days_string = "+".$plan->duration." days";
		//echo $plus_days_string;
		$expiration = date("Y-m-d", strtotime($plus_days_string));
		
		if($plan->tokens!=NULL && $plan->tokens!=0){
			$data = array(
				'tokens'		=>	$plan->tokens,
				'order_id'		=>	$order->id,
				'user_id'		=>	$order->user_id,
				'expiration'	=> 	$expiration
			);
			$this->orders_model->insert_tokens_to_user($data);
		}

		if($plan->tokens_video!=NULL && $plan->tokens_video!=0){
			$data = array(
				'tokens_video'		=>	$plan->tokens_video,
				'order_id'		=>	$order->id,
				'user_id'		=>	$order->user_id,
				'expiration'	=> 	$expiration
			);
			$this->orders_model->insert_tokens_video_to_user($data);
		}

		$plus_days_string_ilimitado = "+".$plan->ilimitado_dias." days";

		$expiration_ilimitado = date("Y-m-d", strtotime($plus_days_string_ilimitado));
		
		if($renovacion==null){
			$plus_days_string_ilimitado = "+".$plan->ilimitado_dias." days";
			$expiration_ilimitado = date("Y-m-d", strtotime($plus_days_string_ilimitado));
			if($plan->ilimitado_activo==1){
				$data_ilimitado = array(
					'end_date' => $expiration_ilimitado,
					'user_id'		=> $order->user_id,
					'order_id'		=>	$order->id
				);
				$this->orders_model->add_unlimited($data_ilimitado);
			}
		}
	}

    /**
     * Función para activar los beneficios del plan para un usuario.
     * (Esta es una versión simplificada de tu función original)
     * function add_tokens_to_user($order_id, $renovacion=NULL){
     * $order = $this->orders_model->load_order_info($order_id);
     * $plan = $this->plan_model->load_plan_info($order->plan_id);
     * $plus_days_string = "+".$plan->duration." days";
     * //echo $plus_days_string;
     * $expiration = date("Y-m-d", strtotime($plus_days_string));
     * if($plan->tokens!=NULL && $plan->tokens!=0){
     * $data = array(
     * 'tokens'        =>    $plan->tokens,
     * 'order_id'        =>    $order->id,
     * 'user_id'        =>    $order->user_id,
     * 'expiration'    =>    $expiration
     * );
     * $this->orders_model->insert_tokens_to_user($data);
     * }
     *
     * if($plan->tokens_video!=NULL && $plan->tokens_video!=0){
     * $data = array(
     * 'tokens_video'        =>    $plan->tokens_video,
     * 'order_id'        =>    $order->id,
     * 'user_id'        =>    $order->user_id,
     * 'expiration'    =>    $expiration
     * );
     * $this->orders_model->insert_tokens_video_to_user($data);
     * }
     *
     * if($plan->ilimitado_activo == 1){
     * $plus_days_string_ilimitado = "+".$plan->ilimitado_dias." days";
     * $expiration_ilimitado = date("Y-m-d", strtotime($plus_days_string_ilimitado));
     * if($plan->ilimitado_activo==1){
     * $data_ilimitado = array(
     * 'end_date' => $expiration_ilimitado,
     * 'user_id'        => $order->user_id,
     * 'order_id'        =>    $order->id
     * );
     * $this->orders_model->add_unlimited($data_ilimitado);
     * }
     * }
     *
     * }
     */
    public function activar_manualmente($order_id = null)
    {
        // Proteger esta función para que solo los admins puedan usarla
        if (!$this->session->userdata('is_logued_in') || $this->session->userdata('role') !== 'is_admin') {
            echo "Acceso denegado.";
            return;
        }

        if (!$order_id) {
            echo "Por favor, proporciona un ID de orden. Ejemplo: /payment/activar_manualmente/5";
            return;
        }

        $order = $this->orders_model->load_order_info($order_id);
        if ($order && $order->status == 0) {
            $update_data = [
                'status' => 1,
                'txn_id' => 'MANUAL_' . time()
            ];
            $this->orders_model->update_order($order_id, $update_data);
            $this->add_tokens_to_user($order_id);
            echo "¡Éxito! La orden #{$order_id} ha sido activada manualmente.";
        } else {
            echo "Error: No se encontró una orden pendiente con el ID #{$order_id}.";
        }
    }

    private function add_tokens_to_user($order_id)
    {
        $order = $this->orders_model->load_order_info($order_id);
        if (!$order || !$order->plan_id) {
            return;
        }

        $plan = $this->plan_model->load_plan_info($order->plan_id);
        if (!$plan) {
            return;
        }

        $plus_days_string = "+" . $plan->duration . " days";
        $expiration = date("Y-m-d", strtotime($plus_days_string));

        if ($plan->tokens_video != NULL && $plan->tokens_video != 0) {
            $data = array(
                'tokens_video' => $plan->tokens_video,
                'order_id'     => $order->id,
                'user_id'      => $order->user_id,
                'expiration'   => $expiration
            );
            $this->orders_model->insert_tokens_video_to_user($data);
        }

        if ($plan->ilimitado_activo == 1) {
            $plus_days_string_ilimitado = "+" . $plan->ilimitado_dias . " days";
            $expiration_ilimitado = date("Y-m-d", strtotime($plus_days_string_ilimitado));
            $data_ilimitado = array(
                'end_date' => $expiration_ilimitado,
                'user_id'  => $order->user_id,
                'order_id' => $order->id
            );
            $this->orders_model->add_unlimited($data_ilimitado);
        }
    }

    /**
     * Webhook: Punto de entrada para la confirmación de pago de Tukuy.
     * Esta URL la debes configurar en tu panel de Tukuy.
     * URL: http://tusitio.com/payment/done_tukuy
     */
    public function done_tukuy()
    {
        // 1. Recibir los datos que envía Tukuy y guardarlos en un log para depuración
        $post_data = file_get_contents('php://input');
        $log_message = "[" . date('Y-m-d H:i:s') . "] Datos recibidos de Tukuy: " . $post_data . "\n";

        // Asegúrate de que la carpeta application/logs/ exista y tenga permisos de escritura (755)
        file_put_contents(APPPATH . 'logs/tukuy_webhook.log', $log_message, FILE_APPEND);

        $data = json_decode($post_data);

        // 2. Validar que los datos esenciales existan
        if (!isset($data->state) || !isset($data->id) || !isset($data->customer->email) || !isset($data->amount)) {
            file_put_contents(APPPATH . 'logs/tukuy_webhook.log', "[ERROR] Petición inválida o faltan datos (state, id, customer.email, amount).\n", FILE_APPEND);
            return;
        }

        // 3. Comprobar si el pago fue exitoso
        // 2. Comprobar si el pago fue exitoso
        if ($data->state == "done") {
            $customer_email = $data->customer->email;
            $transaction_id = $data->id;
            $amount_paid = $data->amount;

            // 3. Buscar al usuario por su email
            $user = $this->users_model->get_user_by_email($customer_email);

            if ($user) {
                // 4. Buscar la última orden pendiente de este usuario que coincida con el monto
                $order = $this->orders_model->get_order($user->id, $amount_paid);

                if ($order) {
                    $order_id = $order->id;
                    $update_data = [
                        'status' => 1,
                        'txn_id' => $transaction_id
                    ];
                    $this->orders_model->update_order($order_id, $update_data);
                    $this->add_tokens_to_user($order_id);
                    file_put_contents(APPPATH . 'logs/tukuy_webhook.log', "[SUCCESS] Orden #{$order_id} activada para el usuario {$customer_email} por el monto de {$amount_paid}.\n", FILE_APPEND);
                } else {
                    file_put_contents(APPPATH . 'logs/tukuy_webhook.log', "[INFO] Se recibió pago de {$customer_email} por {$amount_paid}, pero no se encontró una orden pendiente que coincida.\n", FILE_APPEND);
                }
            } else {
                file_put_contents(APPPATH . 'logs/tukuy_webhook.log', "[ERROR] Se recibió pago, pero no se encontró ningún usuario con el email {$customer_email}.\n", FILE_APPEND);
            }
        }
    }

	public function send_received_message($title, $data)
	{
		$config['protocol']    = 'smtp';
		$config['smtp_host']    = SMTP_URL;
		$config['smtp_port']    = SMTP_PORT;
		$config['smtp_timeout'] = '7';
		$config['smtp_user']    =  SMTP_USER;
		$config['smtp_pass']    = SMTP_KEY;
		$config['charset']    = 'utf-8';
		$config['newline']    = "\r\n";
		$config['mailtype'] = 'html'; // or html
		$config['validation'] = TRUE; // bool whether to validate email or not      
		$this->email->initialize($config);
		$this->email->from('dalemasbajo@gmail.com', 'VIDEO REMIX POOL');
		$this->email->to('dalemasbajo@gmail.com');
		//$this->email->cc('o.reyes@shiftandcontrol.com');
		$this->email->subject($title);
		$this->email->message($data);
		$this->email->send();
	}

	function add_payment_to_owner($order_id){
	// function add_payment_to_owner(){
	// 	$order_id=$this->input->get('order_id');
		$items = $this->orders_model->load_items($order_id);
		$orden = $this->orders_model->load_order_info($order_id);
		$porcentaje_descuento = null;
		if($orden->cupon_id!=null){
			$cupon = $this->products_model->get_cupon_by_id($orden->cupon_id);
			$porcentaje_descuento = $cupon->discount/100;
		}
		//print_r($items);
		foreach($items as $item){
			$producto=$this->products_model->load_product_info($item->product_id);
			//echo $producto->name.' '.$producto->price.'<br>';
			$propietario = $producto->owner_id;
			$user = $this->users_model->load_user_info($propietario);
			$porcentaje = $user->percentage;
			$precio = $producto->price;
			//porcentaje de cobro paypal;
			$precio_menos_comision_paypal = $precio-(($precio*0.056)+0.30);
			if($porcentaje_descuento!=null){
				$precio_menos_comision_paypal = $precio_menos_comision_paypal - ($precio_menos_comision_paypal*$porcentaje_descuento);
			}
			$pago = $precio_menos_comision_paypal*($porcentaje/100);
			$data = array(
				'order_item'	=>	$item->id,
				'user_id'		=>	$propietario,
				'amount'		=>	$pago,
				'order_id'		=>	$orden->id
			);
			$this->orders_model->insert_payment($data);
		}
	}

	function add_items_to_user($order_id){
	// function add_payment_to_owner(){
	// 	$order_id=$this->input->get('order_id');
		$order = $this->orders_model->load_order_info($order_id);
		$items = $this->orders_model->load_items($order_id);
		
		foreach($items as $item){
			
			$data = array(
				'product_id'		=>	$item->product_id,
				'downloads_left'	=>	3,
				'order_id'			=>	$order_id,
				'user_id'			=> $order->user_id
			);
			$this->orders_model->insert_files_to_user($data);
		}
	}

	public function postdata(){
		var_dump($_POST);
	}

	public function send_notification_mail($order_id=609, $renovacion = 0){

		$config['protocol']    = 'smtp';
		$config['smtp_host']    = SMTP_URL;
		$config['smtp_port']    = SMTP_PORT;
		$config['smtp_timeout'] = '7';
		$config['smtp_user']    = SMTP_USER;
		$config['smtp_pass']    = SMTP_KEY;
		$config['charset']    = 'utf-8';
		$config['newline']    = "\r\n";
		$config['mailtype'] = 'html'; // or html
		$config['validation'] = TRUE; // bool whether to validate email or not         

		$this->email->initialize($config);

		$this->email->from('dalemasbajo@gmail.com', 'Video Remix Pool');

		$orden = $this->orders_model->load_order_info($order_id);
		if($orden->cupon_id!=null){
			$cupon = $this->products_model->get_cupon_by_id()($orden->cupon_id);
		}

		$user= $this->users_model->load_user_info($orden->user_id);
		// print_r($user);
		if($orden->is_plan){
			$plan = $this->plan_model->load_plan_info($orden->plan_id);
			// print_r($plan->id);
			$items[0]= (object) array(
				'name'=>$plan->name,
				'tokens'=>$plan->tokens,
				'tokens_video'=>$plan->tokens_video,
				'duration'=>$plan->duration,
				'description'=>$plan->description,
				'ilimitado_activo' => $plan->ilimitado_activo
			);
		}else{
			$items = $this->orders_model->load_order_items($order_id);
		}

		//print_r($items);
		$this->email->to($user->email);
		if ($user->email != "mauricio@shiftandcontrol.com") {
			$this->email->bcc('dalemasbajo@gmail.com');
		}if ($renovacion == 1) {
			$mensaje = 'Gracias por renovar tu plan';
		}else {
			$mensaje = 'Gracias por su Compra';
		}

		$this->email->subject($mensaje);

		$data['items']=$items;
		$data['renovacion'] = $renovacion;
		$data['user']=$user;
		$data['is_plan']=$orden->is_plan;
		$data['orden']=$orden;
		if($orden->cupon_id!=null){
			$data['cupon']=$cupon;
		}
	
		$mail = $this->load->view('emails/payment', $data, TRUE);
		
		$this->email->message($mail);
		echo $mail;
		$this->email->send();
	}



	public function send_test($order_id=609){
		// $order_id=$_GET['orden'];
		$config['protocol']    = 'smtp';
		$config['smtp_host']    = SMTP_URL;
		$config['smtp_port']    = SMTP_PORT;
		$config['smtp_timeout'] = '7';
		$config['smtp_user']    = SMTP_USER;
		$config['smtp_pass']    = SMTP_KEY;
		$config['charset']    = 'utf-8';
		$config['newline']    = "\r\n";
		$config['mailtype'] = 'html'; // or html
		$config['validation'] = TRUE; // bool whether to validate email or not         

		$this->email->initialize($config);

		$this->email->from('dalemasbajo@gmail.com', 'Video Remix Pool');

		$orden = $this->orders_model->load_order_info($order_id);
		if($orden->cupon_id!=null){
			$cupon = $this->products_model->get_cupon_by_id($orden->cupon_id);
		}

		$user= $this->users_model->load_user_info($orden->user_id);
		// print_r($user);
		if($orden->is_plan){
			$plan = $this->plan_model->load_plan_info($orden->plan_id);
			// print_r($plan->id);
			$items[0]= (object) array(
				'name'=>$plan->name,
				'tokens'=>$plan->tokens,
				'tokens_video'=>$plan->tokens_video,
				'duration'=>$plan->duration,
				'description'=>$plan->description,
				'ilimitado_activo' => $plan->ilimitado_activo
			);
		}else{
			$items = $this->orders_model->load_order_items($order_id);
		}

		//print_r($items);
		$this->email->to($user->email);

		$this->email->bcc('videoremixpool@gmail.com');

		$this->email->subject('Gracias por su Compra');

		$data['items']=$items;
		$data['user']=$user;
		$data['is_plan']=$orden->is_plan;
		$data['orden']=$orden;
		if($orden->cupon_id!=null){
			$data['cupon']=$cupon;
		}
	
		$mail = $this->load->view('emails/payment', $data, TRUE);
		
		$this->email->message($mail);
		echo $mail;
		$this->email->send();
	}
}
