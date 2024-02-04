package hello.core.scan.filter;

import java.lang.annotation.*;

// 이 어노테이션이 붙은 것은 ComponentScan에 포함 할거야
@Target({ElementType.TYPE}) // 어디에 붙냐 class
@Retention(RetentionPolicy.RUNTIME)
@Documented
public @interface MyexcludeComponent {

}
