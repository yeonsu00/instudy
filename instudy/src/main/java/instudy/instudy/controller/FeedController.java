package instudy.instudy.controller;

import instudy.instudy.domain.Feed;
import instudy.instudy.domain.StudyStatus;
import instudy.instudy.domain.Todo;
import instudy.instudy.repository.FeedRepository;
import instudy.instudy.service.FeedService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@CrossOrigin(origins = "*")
@RestController
public class FeedController {

    private final FeedService feedService;
    private final FeedRepository feedRepository;

    public FeedController(FeedService feedService, FeedRepository feedRepository) {
        this.feedService = feedService;
        this.feedRepository = feedRepository;
    }

    //feed 추가
    @RequestMapping(value = "/feed/create", method = RequestMethod.POST)
    public String createFeed(@RequestBody Map<String, String> paramMap) {
        String userId = paramMap.get("userId");
        System.out.println("test userId : " + userId);
        String content = paramMap.get("content");
        System.out.println("test content : " + content);
        Long groupId = Long.parseLong(paramMap.get("groupId"));
        Feed newFeed = new Feed(userId, content, groupId);
        System.out.println(newFeed.toString());
        feedService.create(newFeed);
        return "create";
    }

    //feed 삭제
    @RequestMapping(value = "/feed/delete", method = RequestMethod.POST)
    public String deleteFeed(@RequestBody Map<String, String> paramMap) {
        Long feedId = Long.parseLong(paramMap.get("feedId"));
        Optional<Feed> deleteFeed = feedRepository.findById(feedId);
        feedService.delete(deleteFeed);
        return "delete";
    }

    //그룹에 해당하는 feed 읽어오기
    @RequestMapping(value = "/feed/read", method = RequestMethod.POST)
    public List<Feed> readFeed(@RequestBody Map<String, String> paramMap) {
        Long groupId = Long.parseLong(paramMap.get("groupId"));
        System.out.println(feedService.findByGroupId(groupId));
        return feedService.findByGroupId(groupId);
    }

}
