package com.equal.connect.services.impl;

import com.equal.connect.entities.Spoc;
import com.equal.connect.entities.User;
import com.equal.connect.exceptions.ResourceNotFoundException;
import com.equal.connect.payloads.UserDto;
import com.equal.connect.repositories.SpocRepo;
import com.equal.connect.repositories.UserRepo;
import com.equal.connect.services.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepo userRepo;
    @Autowired
    private SpocRepo spocRepo;
    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public UserDto createUser(UserDto userDto) {

        User user = this.dtoToUser(userDto);

        User savedUser = this.userRepo.save(user);

        return this.userToDto(savedUser);
    }






    @Override
    public UserDto updateUser(UserDto userDto, Integer userId) {

        User user = this.userRepo.findById(userId).orElseThrow(()-> new ResourceNotFoundException("User"," id ", userId));

        user.setEmail(userDto.getEmail());
        user.setPassword(userDto.getPassword());

        User updatedUser =  userRepo.save(user);
        UserDto userDto1 =  this.userToDto(updatedUser);

        return userDto1;


    }







    @Override
    public UserDto getUserById(Integer userId) {


        User user = this.userRepo.findById(userId).orElseThrow(()-> new ResourceNotFoundException("User"," Id ", userId));

        return this.userToDto(user);
    }

    @Override
    public List<UserDto> getAllUsers() {

       List<User> users =  this.userRepo.findAll();

       List<UserDto> userDtos = users.stream().map(user -> this.userToDto(user)).collect(Collectors.toList());


        return userDtos;
    }

    @Override
    public void deleteUser(Integer userId) {

        User user =  this.userRepo.findById(userId).orElseThrow(()-> new ResourceNotFoundException("User" , " id ", userId));

        this.userRepo.delete(user);

    }




    private User dtoToUser(UserDto userDto){


        User user  = new User();
        user.setId(userDto.getId());
        user.setEmail(userDto.getEmail());



        user.setPassword( passwordEncoder.encode(userDto.getPassword()) );


        return user;
    }

    public UserDto userToDto(User user){

                UserDto userDto = new UserDto();
                userDto.setId(user.getId());
                userDto.setEmail(user.getEmail());
              userDto.setPassword( passwordEncoder.encode(user.getPassword()));
        return userDto;
    }
}
