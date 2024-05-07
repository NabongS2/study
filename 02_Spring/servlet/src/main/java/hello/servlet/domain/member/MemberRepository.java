package hello.servlet.domain.member;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * 동시성 문제가 고려되어 있지 않음, 실무에서는 ConcurrentHashMap, AtomicLong 사용 고려
 * */
public class MemberRepository {
    private static Map<Long, Member> store = new HashMap<>(); // static 사용
    private static long sequence = 0L; // static 사용
    private static final MemberRepository instance = new MemberRepository();

    public static MemberRepository getInstance() {
        return instance;
    }

    private MemberRepository() { // 생성 막기
    }

    public Member save(Member member) { // 저장 하기
        member.setId(++sequence);
        store.put(member.getId(), member);
        return member;
    }

    public Member findById(Long id) { // 멤버 찾기
          return store.get(id);
    }
    public List<Member> findAll() {
        return new ArrayList<>(store.values()); // store 값 보호 수정은 됨
    }
    public void clearStore() { // 초기화
        store.clear();
    }

}
