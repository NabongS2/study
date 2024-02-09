package hello.core;
import hello.core.member.MemberRepository;
import hello.core.member.MemoryMemberRepository;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.FilterType;
import static org.springframework.context.annotation.ComponentScan.*;
@Configuration
@ComponentScan(
//        // 지정하지 않으면 컴포넌트 스캔이 붙은 패키지부터 찾는다 우리의 경우 core => 폴더 다 뒤져봄
//        // 관례는 프로젝트 최상단에 만든 다음에 필요 없는 것을 제외 하고 쓴다.
//        basePackages = "hello.core.member",
//        // 스프링 빈으로 자동 등록하는데 그 중에서 뺄 것을 지정 (수동으로 등록하는 config를 또 하면 충돌이 남으로 제외)
        excludeFilters = @Filter(type = FilterType.ANNOTATION, classes = Configuration.class))
public class AutoAppConfig {

    // 수동으로 중복 되는 빈을 생성 해봄
//    @Bean(name = "memoryMemberRepository")
//    MemberRepository memberRepository() {
//        return new MemoryMemberRepository();
//    }


}


