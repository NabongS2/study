package hello.itemservice.web.validation;

import hello.itemservice.domain.item.Item;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;
import org.springframework.validation.Errors;
import org.springframework.validation.Validator;

@Component
public class ItemValidator implements Validator {

    @Override
    public boolean supports(Class<?> classZ) {
        // 파라미터에 넘어오는 클래스가 맞는지 자식 클래스도 검증 가능해 진다.
        return Item.class.isAssignableFrom(classZ);
    }

    @Override
    public void validate(Object target, Errors errors) {
        // 부모는 자식을 담을 수 있다. Errors의 자식이 bindingResult

        Item item = (Item) target;

        if (!StringUtils.hasText(item.getItemName())) {
            // 검증 해야 할 필드, 에러 코드
            errors.rejectValue("itemName", "required");
        }
        if (item.getPrice() == null || item.getPrice() < 1000 || item.getPrice() > 1000000) {
            // 들어가야 할 파라미터, 디폴트 메세지
            errors.rejectValue("price", "range", new Object[]{1000, 10000000}, null);
        }
        if (item.getQuantity() == null || item.getQuantity() >= 9999) {
            errors.rejectValue("quantity", "max", new Object[]{9999}, null);
        }

        //특정 필드가 아닌 복합 룰 검증
        if (item.getPrice() != null && item.getQuantity() != null) {
            int resultPrice = item.getPrice() * item.getQuantity();
            if (resultPrice < 10000) {
                errors.reject("totalPriceMin", new Object[]{10000, resultPrice}, null);
            }
        }
    }
}
