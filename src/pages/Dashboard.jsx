import style from "./Dashboard.module.css";
function Dashboard(){
    return <main className={`${style.Dashboard} dashboard`}>
        <section className={style.heading_section}>
            <h2 className={style.mainHeading}>Dashboard</h2>
            <p className={style.subHeading}>Welcome back, Admin!</p>
        </section>
        <section className={style.cards_container}>
                <div className={style.card}>
                    <h3>total students</h3>
                    <h2>120</h2>
                </div>
                <div className={style.card}>
                    <h3>total rooms</h3>
                    <h2>50</h2>
                </div>
                <div className={style.card}>
                    <h3>available rooms</h3>
                    <h2>12</h2>
                </div>
                <div className={style.card}>
                    <h3>total revenue</h3>
                    <h2>₹120000</h2>
                </div>
        </section>
    </main>
}
export default Dashboard;