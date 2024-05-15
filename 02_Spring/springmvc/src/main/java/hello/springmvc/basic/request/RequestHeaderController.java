package hello.springmvc.basic.request;

import jakarta.servlet.http.HttpServletRequest;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpMethod;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Locale;

@Slf4j
@RestController
public class RequestHeaderController {

    @RequestMapping("/headers")
    public String headers(HttpServletRequest request,
                          HttpServletRequest response,
                          HttpMethod httpMethod, // get, post
                          Locale locale, // 언어 정보
                          @RequestHeader MultiValueMap<String, String> headerMap,  // 헤더 모두
                          @RequestHeader("host") String host, // 필수 헤더  하나 받을 때
                          @CookieValue(value = "myCookie", required = false) String cookie // 쿠키
                          // 없어도 됨 required = false
    ) {

        log.info("request={}", request);
        log.info("response={}", response);
        log.info("httpMethod={}", httpMethod);
        log.info("locale={}", locale);
        log.info("headerMap={}", headerMap);
        log.info("header host={}", host);
        log.info("myCookie={}", cookie);
        return "ok";
    }
}
