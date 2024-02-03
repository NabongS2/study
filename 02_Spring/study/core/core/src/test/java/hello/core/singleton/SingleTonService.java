package hello.core.singleton;

public class SingleTonService {

    // 자기 자신을 내부에 선언, 하나만 존재
    // 1. static 영역에 객체 instance를 미리 하나 생성해서 올려둔다
    private static final SingleTonService instance = new SingleTonService();

    // 자기 자신을 생성하고 인스턴스에 참조로 넣어놈
    // 2. 이 객체 인스턴스가 필요하면 오직 getInstance() 메서드를 통해서만 조회할 수 있다.
    // 이 메서드를 호출하면 항상 같은 인스턴스를 반환한다.
    public static SingleTonService getInstance() {
        return instance;
    }

    // 프라이빗 생성자로 외부에서 생성을 막음
    // 3. 딱 1개의 객체 인스턴스만 존재해야 하므로, 생성자를 private으로 막아서 혹시라도
    // 외부에서 new 키워드로 객체 인스턴스가 생성되는 것을 막는다.
    private SingleTonService() {}

    public void logic(){
        System.out.println("싱글톤 객체 호출 로직");
    }

}
