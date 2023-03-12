package com.equal.connect.controllers;

import com.equal.connect.entities.Spoc;
import com.equal.connect.exceptions.ResourceNotFoundException;
import com.equal.connect.repositories.SpocRepo;
import com.equal.connect.repositories.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class SpocController {


    @Autowired
    private UserRepo userRepo;
    @Autowired
    private SpocRepo spocRepo;


    @PostMapping("/spoc/{userId}")
   public ResponseEntity<Spoc>  createSpoc (@PathVariable(value = "userId") int userId,@RequestBody Spoc spoc) {


       Spoc spoc1 = userRepo.findById(userId).map(user -> {
           spoc.setUser(user);
           return spocRepo.save(spoc);
       }).orElseThrow(()-> new ResourceNotFoundException("User"," id ", userId));

        return new ResponseEntity<>(spoc1, HttpStatus.CREATED);
   }

}
