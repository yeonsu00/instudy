package instudy.instudy.service;

import instudy.instudy.domain.Feed;
import instudy.instudy.repository.FeedRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@Transactional
public class FeedService {

    private final FeedRepository feedRepository;
    public FeedService(FeedRepository feedRepository) {
        this.feedRepository = feedRepository;
    }

    public void create(Feed feed) {
        feedRepository.save(feed);
    }

    public void delete(Optional<Feed> feed) {

    }

}