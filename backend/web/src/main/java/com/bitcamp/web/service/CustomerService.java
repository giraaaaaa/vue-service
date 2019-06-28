package com.bitcamp.web.service;

import java.util.List;
import java.util.Optional;

import com.bitcamp.web.domain.CustomerDTO;
import com.bitcamp.web.entities.Customer;
import com.bitcamp.web.repositories.CustomerRepository;
import com.bitcamp.web.service.CustomerService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CustomerService {
    @Autowired CustomerRepository customerRepository;

    public Long count(){
        return customerRepository.count();
    }
 
    public void delete(Customer customer) {
        customerRepository.delete(customer);
    }

    public void delete(Iterable<Customer> it){
        customerRepository.deleteAll();
    }
    public boolean exists(Long id){
        return customerRepository.existsById(id);
    }
    public Iterable<Customer> findAll(){
        return customerRepository.findAll();
    }
    public Iterable<Customer> findAll(Iterable<Customer> it){
        return customerRepository.findAll();
    }
    public Optional<Customer> findById(Long id){
        return customerRepository.findById(id);
    }
    public Iterable<Customer> save(Iterable<Customer> it){
        return customerRepository.saveAll(it);
    }
    public Customer save(Customer customer){
        return customerRepository.save(customer);
    }





    // public void addCustomer(Customer customer) {
    //     customerRepository.save(customer);
    // }


    // public List<CustomerDTO> findCustomers() {
    //     Iterable <CustomerDTO> customer = customerRepository.count();
    //     return null;
    // }

  
    // public List<CustomerDTO> findCustomersByOption(CustomerDTO option) {
    //     return customerRepository.findByCustomerId(option);
    // }

   
    // public CustomerDTO findCustomerByCustomerId(String customerId) {
    //     return null;
    // }

 
    // public int updateCustomer(CustomerDTO customer) {
    //     int res = 0;
    //     if(res == 1){
    //         System.out.println("서비스 수정성공");
    //     }else{
    //         System.out.println("서비스 수정실패");
    //     }
    //     return res;
    // }


    // public void deleteCustomer(CustomerDTO customer) {
    //     return customerRepository.delete(entity);
    // }

 
    // public Long countAll() {
    //     return customerRepository.count();
    // }

 
    // public CustomerDTO login(CustomerDTO customer) {
    //     System.out.println("컨트롤러에서 넘어온 ID: "+customer.getCustomerId());
    //     System.out.println("컨트롤러에서 넘어온 PASS: "+customer.getPassword());
    //     return customerRepository.login(customer);
    // }
    
}
