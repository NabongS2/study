package hello.core.autowired;

import hello.core.AutoAppConfig;
import hello.core.discount.DiscountPolicy;
import hello.core.member.Grade;
import hello.core.member.Member;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import java.util.List;
import java.util.Map;

import static org.assertj.core.api.Assertions.*;

public class AllBeanTest {

    @Test
    void findAllBean() {
        // AutoAppConfig.class 안하면 빈 객체로 출력, 의존 관계 주입 후 다시 출력하면 나옴
        ApplicationContext ac = new AnnotationConfigApplicationContext(AutoAppConfig.class, DiscountService.class);

        DiscountService discountService = ac.getBean(DiscountService.class);
        Member member = new Member(1L, "userA", Grade.VIP);
        int discountPrice = discountService.discount(member, 10000, "fixDiscountPolicy");

        assertThat(discountService).isInstanceOf(DiscountService.class);
        assertThat(discountPrice).isEqualTo(1000);

        int rateDiscountPolicy = discountService.discount(member, 20000, "rateDiscountPolicy");
        assertThat(rateDiscountPolicy).isEqualTo(2000);
    }

    static class DiscountService {

        // 모든 빈이 주입
        private final Map<String, DiscountPolicy> policyMap;
        private final List<DiscountPolicy> policies;

        @Autowired
        public DiscountService(Map<String, DiscountPolicy> policyMap, List<DiscountPolicy> policies) {
            this.policyMap = policyMap;
            this.policies = policies;
            System.out.println("policyMap = " + policyMap);
            System.out.println("policies = " + policies);
            // policyMap = {fixDiscountPolicy=hello.core.discount.FixDiscountPolicy@110844f6, rateDiscountPolicy=hello.core.discount.RateDiscountPolicy@6f89f665}
            // policies = [hello.core.discount.FixDiscountPolicy@110844f6, hello.core.discount.RateDiscountPolicy@6f89f665]

        }
        
        public int discount(Member member, int price, String discountCode) {
            // 필요한 할인 정책을 바로 사용할 수 있다. => 다형성을 지키는 코드
            // Map 등록된 모든 빈 중에 필요한 빈을 찾아서 사용
            DiscountPolicy discountPolicy = policyMap.get(discountCode);
            return discountPolicy.discount(member, price);
        }
    }
}
