package com.equal.connect.services;



import com.equal.connect.entities.Spoc;
import com.equal.connect.entities.User;
import com.equal.connect.payloads.UserDto;

import java.util.List;

public interface UserService {

    UserDto createUser(UserDto user);
    UserDto updateUser(UserDto user, Integer userId);
    UserDto getUserById(Integer userId);
    List<UserDto> getAllUsers();
    void deleteUser(Integer userId);



}
