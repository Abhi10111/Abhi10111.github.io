import Intro from "./Intro";
import "./Profile.css";
import FactCard from "./FactCard";

export default function Profile() {
    return (
        <main className="profile-view">
            <div className="profile-grid">
                {/* Left — hero text */}
                <section className="profile-left">
                    <Intro />
                </section>

                {/* Right — info card */}
                <aside className="profile-right">
                    <FactCard />
                </aside>
            </div>
        </main>
    );
}