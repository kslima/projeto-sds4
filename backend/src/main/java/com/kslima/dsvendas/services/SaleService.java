package com.kslima.dsvendas.services;

import com.kslima.dsvendas.entities.Sale;
import com.kslima.dsvendas.entities.Seller;
import com.kslima.dsvendas.repositories.SaleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SaleService {

    @Autowired
    private SaleRepository saleRepository;

    public List<Sale> findAll() {
        return saleRepository.findAll();
    }
}
