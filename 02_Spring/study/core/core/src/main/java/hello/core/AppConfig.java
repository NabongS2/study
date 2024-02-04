package hello.core;

import hello.core.discount.DiscountPolicy;
import hello.core.discount.FixDiscountPolicy;
import hello.core.discount.RateDiscountPolicy;
import hello.core.member.MemberService;
import hello.core.member.MemberServiceImpl;
import hello.core.member.MemoryMemberRepository;
import hello.core.order.OrderService;
import hello.core.order.OrderServiceImpl;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class AppConfig {

    // 두 번 호출 하게 됨 싱글톤이 꺠지는 걸까?
    // @Bean memberService -> new MemoryMemberRepository();
    // @Bean orderService -> new MemoryMemberRepository();

    // 메서드 순서 보장은 X 지만 로직상
    // call AppConfig.memberService
    // call AppConfig.memberRepository // 멤버 서비스
    // call AppConfig.memberRepository // 오더
    // call AppConfig.orderService
    // call AppConfig.memberRepository // 3번 호출

    @Bean
    public MemberService memberService() {
        // soutm
        System.out.println("call AppConfig.memberService");
        return new MemberServiceImpl(memberRepository());
    }

    // cmd + option + M => 역할의 따른 구분이 필요 추상화 메서드
    @Bean
    public MemoryMemberRepository memberRepository() {
        System.out.println("call AppConfig.memberRepository");
        return new MemoryMemberRepository();
    }

    @Bean
    public OrderService orderService() {
        System.out.println("call AppConfig.orderService");
        return new OrderServiceImpl(memberRepository(), discountPolicy());
    }

    @Bean
    public DiscountPolicy discountPolicy() {
//        return new FixDiscountPolicy();
        return new RateDiscountPolicy();
    }

}
