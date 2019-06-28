package com.bitcamp.web.repositories;

import static org.junit.Assert.assertThat;

import org.junit.Test;
import org.junit.runner.RunWith;
import static org.hamcrest.Matchers.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

/**
 * CustomerrepositoryTest
 */
@RunWith(SpringRunner.class)
@SpringBootTest
public class CustomerrepositoryTest {
    @Autowired CustomerRepository repo;

    @Test
    public void contextTest() throws Exception{
        Long count = repo.count();
        assertThat(Integer.parseInt(count+""),  equalTo(31));
    }
    
}