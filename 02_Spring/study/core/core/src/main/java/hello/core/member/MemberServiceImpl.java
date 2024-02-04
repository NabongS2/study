package hello.core.member;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component // ("memberService2") 빈 이름 지정도 가능
public class MemberServiceImpl implements MemberService{

    private final MemberRepository memberRepository;

    // new 없애고 생성자 만들기 => 인터페이스에만 의존 => 생성자 주입!
    // AutoConfig 안에 아무것도 없는데 그렇다면 의존 관계 주입 어떻게 하지!?
    @Autowired // 자동으로 의존 관계 주입 ac.getBean(MemberRepository.class) 와 같은 동작을 한다.
    public MemberServiceImpl(MemberRepository memberRepository){
            this.memberRepository = memberRepository;
    }

    @Override
    public void join(Member member) {
        memberRepository.save(member);
    }

    @Override
    public Member findMember(Long memberId) {
        return memberRepository.findById(memberId);
    }

    // 테스트 용도
    public MemberRepository getMemberRepository() {
        return memberRepository;
    }
}
