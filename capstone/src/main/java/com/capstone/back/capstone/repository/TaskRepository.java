package com.capstone.back.capstone.repository;

import com.capstone.back.capstone.model.Task;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskRepository extends JpaRepository<Task, Long> {
}
