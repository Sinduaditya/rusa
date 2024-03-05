import Frame from "../../assets/explore/Frame.svg";
import Carnaval from "../../assets/explore/Camping_tent.svg";
import Religi from "../../assets/explore/religi.svg";
import Culinary from "../../assets/culinary.svg";
import Argowisata from "../../assets/explore/argowisata.svg";
import Nature from "../../assets/naturev2.svg";

const getCategoryImage = (category) => {
    switch (category) {
        case "Pilihan Terbaik":
            return Frame;
        case "Rekreasi & Santai":
            return Carnaval;
        case "Religi":
            return Religi;
        case "Kuliner":
            return Culinary;
        case "Argowisata":
            return Argowisata;
        case "Wisata Alam":
            return Nature;
        default:
            return null;
    }
};

export default getCategoryImage;