package hello.core.beanfind;

import hello.core.discount.DiscountPolicy;
import hello.core.discount.FixDiscountPolicy;
import hello.core.discount.RateDiscountPolicy;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.NoUniqueBeanDefinitionException;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.Map;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.*;

public class ApplicationContextExtendsFindTest {

    AnnotationConfigApplicationContext ac = new AnnotationConfigApplicationContext(TestConfig.class);

    @Test
    @DisplayName("부모 타입으로 조회 시, 자식이 둘 이상 있으면, 중복 오류가 발생한다.")
    void findBeanByParentsTypeDuplicate() {
        assertThrows(NoUniqueBeanDefinitionException.class,
                () -> ac.getBean(DiscountPolicy.class));
    }
    @Test
    @DisplayName("부모 타입으로 조회 시, 자식이 둘 이상 있으면, 이름을 지정하면 된다.")
    void findBeanByParentsTypeBeanName() {
        DiscountPolicy reteDiscountPolicy = ac.getBean("reteDiscountPolicy", DiscountPolicy.class);
        assertThat(reteDiscountPolicy).isInstanceOf(RateDiscountPolicy.class);
    }

    // 안 좋은 방법
    @Test
    @DisplayName("특정 타입으로 조회")
    void findBeanByParentSubType() {
        DiscountPolicy bean = ac.getBean(RateDiscountPolicy.class);
        assertThat(bean).isInstanceOf(RateDiscountPolicy.class);
    }

    @Test
    @DisplayName("부모 타입으로 조회")
    void findBeanByParentType() {
        Map<String, DiscountPolicy> beansOfType = ac.getBeansOfType(DiscountPolicy.class);
        assertThat(beansOfType.size()).isEqualTo(2);
        for (String Key : beansOfType.keySet()) {
            System.out.println("Key = " + Key + "value = " + beansOfType.get(Key));
        }
    }

    // 스프링 빈 내부적인 빈들까지 다 나옴
    @Test
    @DisplayName("부모 타입으로 모두 조회하기")
    void findBeanByObjectType() {
        Map<String, Object> beansOfType = ac.getBeansOfType(Object.class);
        for (String Key : beansOfType.keySet()) {
            System.out.println("Key = " + Key + "value = " + beansOfType.get(Key));
        }
    }



    @Configuration
    static class TestConfig {
        @Bean
        public DiscountPolicy reteDiscountPolicy(){
            return new RateDiscountPolicy();
        }

        @Bean
        public DiscountPolicy fixDiscountPolicy(){
            return new FixDiscountPolicy();
        }
    }

}
