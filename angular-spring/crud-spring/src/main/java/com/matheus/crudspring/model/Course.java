package com.matheus.crudspring.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Getter //gera getters
@Setter //gera setters
@Data
//@Table(name = "cursos") // mapeia model para a tabela cursos no banco de dados
@Entity //mapeia model para a tabela com o mesmo nome da classe no banco de dados
public class Course {

    @Id //indica que é chave primária
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "name", length = 200, nullable = false) // é possível associar a tabela com colunas de nomes diferentes
    private String name;

    @Column(length = 10, nullable = false)
    private String category;
   
}
