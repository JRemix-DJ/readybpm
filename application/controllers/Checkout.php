<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Checkout extends CI_Controller {
	public function __construct(){
		parent::__construct();
		$this->load->helper(array('url', 'form')); 
		$this->load->model(array('users_model', 'genero_model', 'products_model', 'banners_model', 'faq_model', 'orders_model', 'plan_model'));
		$this->load->library(array('session','form_validation'));
		$this->load->database('default');
		$this->users_model->check_payment();
	}

	public function index() {

		if($this->session->userdata('is_logued_in')){
			$data['title']="Checkout - ReadyBPM";
			$data['description']="Finaliza tu pago";
			$data['products']=$this->products_model->get_products();
			$data['generos']=$this->genero_model->get_generos();
			$data['users']=$this->users_model->get_all_users();
			$data['cart_total'] = $this->totalCarrito();
			
			$data_order = array(
				'user_id'		=>	$this->session->userdata('id_usuario'),
				'date_order'	=> 	date("Y-m-d H:i:s"),
				'total_price'	=> 	$this->totalCarrito(),
				'status'		=> 	0
			);
			if(isset($_SESSION['cart']['cupon'])){
				$data_order['discount']=1;
				$data_order['total_discount']=$_SESSION['cart']['cupon']['descuento_total'];
				$data_order['cupon_id'] = $_SESSION['cart']['cupon']['cupon_id'];
			}
			$order_id = $this->orders_model->create_order($data_order);
			$data['order_id'] = $order_id;

			$data['djs']=$this->users_model->get_djs();
			$this->load->view('templates/header', $data);
			$this->load->view('checkout');
			$this->load->view('templates/footer', $data);
		}else{
			$data['title']="Checkout - ReadyBPM";
			$data['description']="Finaliza tu pago";
			$this->load->view('templates/header', $data);
			$this->load->view('checkout-registrate.php');
			$this->load->view('templates/footer', $data);
		}
	}

	public function totalCarrito(){
		$total = 0;
		if(isset($_SESSION['cart'])){ 
			foreach($_SESSION['cart']['items'] as $item){
				$total=$total+$item['price'];
			}
		}
		if(isset($_SESSION['cart']['cupon'])){
			$total = $total-$_SESSION['cart']['cupon']['descuento_total'];
		}
		return $total;
	}

    public function start_plan_payment($plan_id) {
        // 1. Verificar si el usuario ha iniciado sesión
        if (!$this->session->userdata('is_logued_in')) {
            $this->session->set_userdata('redirect_after_login', 'checkout/start_plan_payment/' . $plan_id);
            redirect('login');
            return;
        }

        // 2. Obtener la información del plan
        $plan = $this->plan_model->load_plan_info($plan_id);
        if (!$plan || empty($plan->url_pago)) {
            show_error('El plan seleccionado no es válido o no tiene una pasarela de pago configurada.', 404);
            return;
        }

        // 3. Crear la orden pendiente
        $order_data = [
            'user_id'     => $this->session->userdata('id_usuario'),
            'total_price' => $plan->price,
            'status'      => 0, // 0 = Pendiente
            'is_plan'     => 1,
            'plan_id'     => $plan->id,
            'date_order'  => date('Y-m-d H:i:s')
        ];

        $order_id = $this->orders_model->create_order_plan($order_data);

        if (!$order_id) {
            show_error('No se pudo procesar tu solicitud. Por favor, intenta de nuevo.', 500);
            return;
        }

        // 4. Redirigir a la pasarela de pago
        redirect($plan->url_pago);
    }
}
