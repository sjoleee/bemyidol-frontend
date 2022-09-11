import type {NextPage} from 'next';
import Button from "@/components/Button";

const Home: NextPage = () => {
    return (
        <div className={"flex flex-col justify-center items-center"}>
            <h1 className={"text-3xl"}>아이돌 메이커</h1>
            <p className={"w-1/3"}>30년 간 꾸준한 덕질의 결실로
                ‘마스터 엔터테인먼트’의 CEO가 된 당신은
                현존하는 최고의 아이돌 멤버들을 영입하여
                아이돌 어벤져스를 만들 계획이다.</p>

            <Button fullWidth>시작하기</Button>
        </div>
    );
};

export default Home;
