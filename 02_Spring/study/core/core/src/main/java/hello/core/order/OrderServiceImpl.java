package hello.core.order;

import hello.core.discount.DiscountPolicy;
import hello.core.member.Member;
import hello.core.member.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class OrderServiceImpl implements  OrderService{

    @Autowired private MemberRepository memberRepository;
    @Autowired private DiscountPolicy discountPolicy;

    public MemberRepository getMemberRepository() {
        return memberRepository;
    }

    @Override
    public Order createOrder(Long memberId, String itemName, int itemPrice) {
        Member member = memberRepository.findById(memberId);
        int discountPrice = discountPolicy.discount(member, itemPrice);

        return new Order(memberId, itemName, itemPrice, discountPrice);
    }

//    @Autowired(required = false) // 주입할 대상이 없어도 동작하게 하려면 @Autowired(required = false)
//    public void setMemberRepository(MemberRepository memberRepository){
//        System.out.println("수정자 주입 확인 memberRepository = " + memberRepository);
//        this.memberRepository = memberRepository;
//    }
//
//    @Autowired
//    public void setDiscountPolicy(DiscountPolicy discountPolicy) {
//        System.out.println("수정자 주입 확인 discountPolicy = " + discountPolicy);
//        this.discountPolicy = discountPolicy;
//    }

    // 중요! 생성자가 딱 1개만 있으면 @Autowired를 생략해도 자동 주입 된다. 물론 스프링 빈에만 해당한다
//    @Autowired // 생략 가능
//    public OrderServiceImpl(MemberRepository memberRepository, DiscountPolicy discountPolicy) {
//        System.out.println("생성자 주입 확인 memberRepository = " + memberRepository);
//        System.out.println("생성자 주입 확인 discountPolicy = " + discountPolicy);
//
//        this.memberRepository = memberRepository;
//        this.discountPolicy = discountPolicy;
//    }


}
