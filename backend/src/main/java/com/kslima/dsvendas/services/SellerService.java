package com.kslima.dsvendas.services;

import com.kslima.dsvendas.dto.SellerDTO;
import com.kslima.dsvendas.entities.Seller;
import com.kslima.dsvendas.repositories.SellerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class SellerService {

    @Autowired
    private SellerRepository sellerRepository;

    public List<SellerDTO> findAll() {
        List<Seller> result = sellerRepository.findAll();
        return result.stream()
                .map(SellerDTO::new)
                .collect(Collectors.toList());
    }
}
