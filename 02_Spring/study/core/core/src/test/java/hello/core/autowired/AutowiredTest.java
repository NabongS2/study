package hello.core.autowired;

import hello.core.AppConfig;
import hello.core.member.Member;
import jakarta.annotation.Nullable;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import java.util.Optional;

public class AutowiredTest {

    @Test
    void AutowiredOptionTest() {
        ApplicationContext ac = new AnnotationConfigApplicationContext(TestBean.class);

    }

    // 컴포넌트 스캔하는 것처럼 스프링 빈으로 등록
    static class TestBean {

        // 메서드 자체가 호출이 안된다.
        @Autowired(required = false)
        public void setNobean1(Member noBean1) {
            System.out.println("noBean1 = " + noBean1);
        }

        // 호출은 되지만 null 로 들어온다.
        @Autowired
        public void setNobean2(@Nullable Member noBean2) {
            System.out.println("noBean2 = " + noBean2);
        }

        // 자바 8부터 제공하는 optional empty 로 들어온다.
        @Autowired
        public void setNobean3(Optional<Member> noBean3) {
            System.out.println("noBean3 = " + noBean3);
        }

    }
}
