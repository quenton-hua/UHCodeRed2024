import styles from "../../styles/dashboard.module.css";
import { CirclePlus } from "akar-icons";
function Dashboard() {
    return(
        <section className={styles.dashboard}>
            <div>insert search bar here</div>
            <div className={styles.cards}>
                <CreateNewQuizCard/>
                <QuizCard />
                <QuizCard />
                <QuizCard />
                <QuizCard />
                <QuizCard />
                <QuizCard />
                <QuizCard />
                <QuizCard />
                <QuizCard />
                <QuizCard />
            </div>
        </section>
    );
}

function CreateNewQuizCard(){
    return(
        <div className={`${styles.card} ${styles.createnew}`}>
            <div>
                <p>Create a new Quiz</p>
            <CirclePlus strokeWidth={2} size={36} />
            </div>
        </div>
    );
}

function QuizCard() {
    return(
        <div className={styles.card}>
            test
        </div>
    );
}



export default Dashboard;