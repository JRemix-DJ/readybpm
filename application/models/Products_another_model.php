<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');
/**
 * 
 */
class Products_another_model extends CI_Model {
	public function __construct() {
        // $this->db2 = $this->load->database('another', TRUE);
		parent::__construct();
    }
    
	public function load_product_info($id){
		$this->db->where('id',$id);
		$query = $this->db->get('products');
		if($query->num_rows() == 1)
		{
			return $query->row();
		}else{
			return false;
		}
    }

    public function get_all_users(){
		
		$query = $this->db->get('users');
		$data = $query->result();
		return $data;
	}
    
    public function load_user_info($id){
		$this->db->where('id',$id);
		$query = $this->db->get('users');
		if($query->num_rows() == 1)
		{
			return $query->row();
		}else{
			return false;
		}
    }
    
    public function get_djs(){
        $this->db->select('users.id, users.username, products.product_type_id, users.role_id');
		$this->db->from('users');
		$this->db->where('users.role_id', 3);
		$this->db->where('products.product_type_id', 3);
		$this->db->join('products', 'users.id = products.owner_id');
		$this->db->group_by('users.id');
		$this->db->order_by('users.username', 'ASC');
		$query = $this->db->get();
		$data = $query->result();
		return $data;
	}

    public function get_cupons(){
		$query = $this->db->get('cupons');
		$data = $query->result();
		return $data;
	}

    public function get_cupon_by_code($code){
        $this->db->where('code', $code);
        $this->db->from('cupons');
        return $this->db->count_all_results();
    }

    public function get_cupon($code){
        $this->db->where('code', $code);
        $query = $this->db->get('cupons');
        $data = $query->row();
		return $data;
    }

    public function get_cupon_by_id($cupon_id){
        $this->db->where('id', $cupon_id);
        $query = $this->db->get('cupons');
        $data = $query->row();
		return $data;
    }

    public function get_total_products_approved($where_parameter=NULL) 
    {
        $parametros = is_null($where_parameter)? 'nulo': $where_parameter;
        if($parametros!= 'nulo'){
            // while(list($clave, $valor) = each($parametros)){
            //     $this->db->where($clave, $valor);
            // }
            foreach($parametros as $clave => $valor){
                $this->db->where($clave, $valor);
            }

        }
        $this->db->where('approved', 1);
        
        $this->db->from('products');

        //$this->db->get('products');
        return $this->db->count_all_results();
    }
    public function get_total_products_por_aprobar($where_parameter=NULL, $search=NULL) 
    {
        $parametros = is_null($where_parameter)? 'nulo': $where_parameter;
        if($parametros!= 'nulo'){
            // while(list($clave, $valor) = each($parametros)){
            //     $this->db->where($clave, $valor);
            // }
            foreach($parametros as $clave => $valor){
                $this->db->where($clave, $valor);
            }

        }
        $search_data = is_null($search)? 'nulo': $search;
        if($search_data!= 'nulo'){
            $this->db->group_start();
            $this->db->like('name', $search_data);
            $this->db->group_end();
        }

        $this->db->where('approved', 0);
        $this->db->where_not_in('gender_id', 45);
        $this->db->from('products');

        //$this->db->get('products');
        return $this->db->count_all_results();
    }

	public function get_total_products($where_parameter=NULL, $search=NULL) 
    {
        $parametros = is_null($where_parameter)? 'nulo': $where_parameter;
        if($parametros!= 'nulo'){
            // while(list($clave, $valor) = each($parametros)){
            //     $this->db->where($clave, $valor);
            // }
            foreach($parametros as $clave => $valor){
                $this->db->where($clave, $valor);
            }

        }
        //deberia ser un parametro
        //$this->db->where('product_type_id',1);
        $search_data = is_null($search)? 'nulo': $search;
        if($search_data!= 'nulo'){
            $this->db->group_start();
            $this->db->like('name', $search_data);
            $this->db->group_end();
        }
        $this->db->from("products");
        return $this->db->count_all_results();
    }

    public function get_total_products_by_gender($gender_id, $where_parameter=NULL) 
    {
        $parametros = is_null($where_parameter)? 'nulo': $where_parameter;
        if($parametros!= 'nulo'){
            // while(list($clave, $valor) = each($parametros)){
            //     $this->db->where($clave, $valor);
            // }
            foreach($parametros as $clave => $valor){
                $this->db->where($clave, $valor);
            }

        }
        $this->db->where('gender_id',$gender_id);
    	$this->db->where('approved',1);
    	$this->db->from("products");
		return $this->db->count_all_results();
    }

     public function get_total_products_searched($gender_id=NULL, $dj_id=NULL, $name=NULL, $where_parameter=NULL) 
    {
        if($gender_id!=NULL){
            $this->db->where('gender_id',$gender_id);
        }
        if($dj_id!=NULL){
            $this->db->where('owner_id',$dj_id);
        }
        if($name!=NULL){
            $this->db->like('name',$name);
            $this->db->or_like('artist',$name);
        }
        $parametros = is_null($where_parameter)? 'nulo': $where_parameter;
        if($parametros!= 'nulo'){
            // while(list($clave, $valor) = each($parametros)){
            //     $this->db->where($clave, $valor);
            // }
            foreach($parametros as $clave => $valor){
                $this->db->where($clave, $valor);
            }

        }
        $this->db->where('approved',1);
        $this->db->from("products");
        return $this->db->count_all_results();
    }


    public function get_current_page_records_searched($limit, $start, $gender_id=NULL, $dj_id=NULL, $name=NULL, $where_parameter=NULL) 
    {
        $this->db->limit($limit, $start);
        if($gender_id!=NULL||$dj_id!=NULL||$name!=NULL){
            $this->db->group_start();
            if($gender_id!=NULL){
                $this->db->where('gender_id',$gender_id);
            }
            if($dj_id!=NULL){
                $this->db->where('owner_id',$dj_id);
            }
            if($name!=NULL){
                $this->db->like('name',$name);
                $this->db->or_like('artist',$name);
            }
            $this->db->group_end();
        }
        $parametros = is_null($where_parameter)? 'nulo': $where_parameter;
        if($parametros!= 'nulo'){
            // while(list($clave, $valor) = each($parametros)){
            //     $this->db->where($clave, $valor);
            // }
            foreach($parametros as $clave => $valor){
                $this->db->where($clave, $valor);
            }

        }
        $this->db->where('approved',1);
        $this->db->order_by('time_approved', 'desc');
        $query = $this->db->get("products");

 
        if ($query->num_rows() > 0) 
        {
            foreach ($query->result() as $row) 
            {
                $data[] = $row;
            }
             
            return $data;
        }
 
        return false;
    }

    public function get_total_products_by_dj($dj_id, $where_parameter=NULL) 
    {
        $parametros = is_null($where_parameter)? 'nulo': $where_parameter;
        if($parametros!= 'nulo'){
            // while(list($clave, $valor) = each($parametros)){
            //     $this->db->where($clave, $valor);
            // }
            foreach($parametros as $clave => $valor){
                $this->db->where($clave, $valor);
            }

        }
        $this->db->where('owner_id',$dj_id);
         $this->db->where('approved',1);
         //$this->db->where('product_type_id',1);
        $this->db->from("products");
        return $this->db->count_all_results();
    }

    public function get_current_page_records($limit, $start, $where_parameter=NULL, $no_parameter=NULL, $not_in=NULL, $search=NULL) 
    {
    	$parametros = is_null($where_parameter)? 'nulo': $where_parameter;
    	if($parametros!= 'nulo'){
    		// while(list($clave, $valor) = each($parametros)){
    		// 	$this->db->where($clave, $valor);
    		// }
            foreach($parametros as $clave => $valor){
                $this->db->where($clave, $valor);
            }

        }
        //$this->db->where('product_type_id',1);
    	if(!is_null($not_in)&&!is_null($no_parameter)){ 
    		$this->db->where_not_in($no_parameter,$not_in);
    	}
        $search_data = is_null($search)? 'nulo': $search;
        if($search_data!= 'nulo'){
            $this->db->group_start();
            $this->db->like('name', $search_data);
            $this->db->or_like('artist',$search_data);
            $this->db->group_end();
        }
        //$this->db->where('approved',1);
    	$this->db->order_by('time_approved', 'desc');
        $this->db->limit($limit, $start);
        $query = $this->db->get("products");
 
        if ($query->num_rows() > 0) 
        {
            foreach ($query->result() as $row) 
            {
                $data[] = $row;
            }
             
            return $data;
        }
 
        return false;
    }

    public function get_current_page_records_order_created($limit, $start, $where_parameter=NULL, $no_parameter=NULL, $not_in=NULL, $search=NULL) 
    {
        $parametros = is_null($where_parameter)? 'nulo': $where_parameter;
        if($parametros!= 'nulo'){
            // while(list($clave, $valor) = each($parametros)){
            //     $this->db->where($clave, $valor);
            // }
            foreach($parametros as $clave => $valor){
                $this->db->where($clave, $valor);
            }

        }
        //$this->db->where('product_type_id',1);
        $search_data = is_null($search)? 'nulo': $search;
        if($search_data!= 'nulo'){
            $this->db->group_start();
            $this->db->like('name', $search_data);
            $this->db->group_end();
        }
        if(!is_null($not_in)&&!is_null($no_parameter)){ 
            $this->db->where_not_in($no_parameter,$not_in);
        }
        //$this->db->where('approved',1);
        $this->db->order_by('created_on', 'desc');
        $this->db->limit($limit, $start);
        $query = $this->db->get("products");
 
        if ($query->num_rows() > 0) 
        {
            foreach ($query->result() as $row) 
            {
                $data[] = $row;
            }
             
            return $data;
        }
 
        return false;
    }

    public function get_current_page_records_by_gender($limit, $start, $gender_id, $where_parameter=NULL) 
    {
        $parametros = is_null($where_parameter)? 'nulo': $where_parameter;
        if($parametros!= 'nulo'){
            // while(list($clave, $valor) = each($parametros)){
            //     $this->db->where($clave, $valor);
            // }
            foreach($parametros as $clave => $valor){
                $this->db->where($clave, $valor);
            }

        }
        $this->db->limit($limit, $start);
        $this->db->where('gender_id', $gender_id);
         $this->db->where('approved',1);
         //$this->db->where('product_type_id',1);
         $this->db->order_by('time_approved', 'DESC');
        $query = $this->db->get("products");
 
        if ($query->num_rows() > 0) 
        {
            foreach ($query->result() as $row) 
            {
                $data[] = $row;
            }
             
            return $data;
        }
 
        return false;
    }

    public function get_current_page_records_by_dj($limit, $start, $dj_id, $where_parameter=NULL) 
    {
        $parametros = is_null($where_parameter)? 'nulo': $where_parameter;
        if($parametros!= 'nulo'){
            // while(list($clave, $valor) = each($parametros)){
            //     $this->db->where($clave, $valor);
            // }
            foreach($parametros as $clave => $valor){
                $this->db->where($clave, $valor);
            }

        }
        $this->db->limit($limit, $start);
        $this->db->where('owner_id', $dj_id);
         $this->db->where('approved',1);
         //$this->db->where('product_type_id',1);
         $this->db->order_by('time_approved', 'DESC');
        $query = $this->db->get("products");
 
        if ($query->num_rows() > 0) 
        {
            foreach ($query->result() as $row) 
            {
                $data[] = $row;
            }
             
            return $data;
        }
 
        return false;
    }

	public function get_products(){
		$query = $this->db->get('products');
		$data = $query->result();
		return $data;
	}

	public function get_product_types(){
		$query = $this->db->get('product_types');
		$data = $query->result();
		return $data;
	}

	public function get_products_by_gender($gender_id){
		$this->db->where('gender_id', $gender_id);
		$query = $this->db->get('products');
		$data = $query->result();
		return $data;
	}

	public function update_product($id, $data){
		$this->db->where('id', $id);
		$this->db->update('products', $data);
	}

	public function create_product($data){
		$this->db->insert('products',$data);
		return true;
	}

	function delete_product($id){
		$this->db->where('id',$id);
		$this->db->delete('products');
		return true;
    }
    
    public function add_download($data){
        $this->db->insert('product_downloads', $data);
        return true;
    }

}