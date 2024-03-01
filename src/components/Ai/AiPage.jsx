import Sidebar from "./sidebar.jsx";
import AiMain from "./AiMain.jsx";

function AiPage() {
    return (
        <>
            <div className="flex h-screen bg-bluelight pt-10 font-poppins">
                <Sidebar />
                <AiMain />
            </div>
        </>
    );
}

export default AiPage;
