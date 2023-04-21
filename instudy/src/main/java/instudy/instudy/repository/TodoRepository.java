package instudy.instudy.repository;

import instudy.instudy.domain.StudyGroup;
import instudy.instudy.domain.Todo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

public interface TodoRepository extends JpaRepository<Todo, Long> {

    Todo save(Todo todo);

}

// 커밋용!