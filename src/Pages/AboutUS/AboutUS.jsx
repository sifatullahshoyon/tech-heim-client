import NavigationBreadcrumb from "../../Components/Shared/NavigationBreadcrumb/NavigationBreadcrumb";
import faq from "../../assets/aboutUs/aboutus.png";
const AboutUS = () => {
  return (
    <div className="container mx-auto">
      {/* Breadcrumb start  */}
      <NavigationBreadcrumb></NavigationBreadcrumb>
      {/* Breadcrumb end  */}
      <div className="mb-[32px]">
        <img src={faq} className="w-auto px-[5px]" alt="" />
      </div>
      <div>
        <p className="text-[20px] font-normal">
          Tech Heim is an innovative online store that offers a diverse selection of digital
          gadgets, available for purchase in both cash and installment options. Embodying the motto
          "Join the digital revolution today" the website not only provides a seamless shopping
          experience but also features a captivating blog section filled with insightful reviews,
          articles, and videos about cutting-edge technology and digital gadgets. Users can actively
          engage with the content through comments and a question-answer section, fostering a
          dynamic community of tech enthusiasts.
        </p>{" "}
        <br />
        <p className="text-[20px] font-medium my-[50px]">Tech Heim Meaning </p> <br />
        The name "Tech Heim" cleverlycombines two languages (English & German), signifying a home of
        technology that provides all the essential tech products and services, making it a one-stop
        destination for tech-savvy individuals seeking the latest and most exciting gadgets. <br />
        <p className="text-[20px] font-medium my-[50px]">
          Some of Tech Heim’s impressive features :
        </p>{" "}
        <br />
        <p className="text-[20px] font-normal">
          Diverse digital gadgets for purchase in cash or installments A blog with reviews and
          articles about the latest technology and gadgets User comments and Q&A section for
          community interaction Represents a tech-savvy "home" with all necessary technology
          Easy-to-use interface for a great user experience Consistent and visually appealing design
          A hub for tech enthusiasts to connect and share insights Helps users make informed
          purchase decisions
        </p>
      </div>
    </div>
  );
};

export default AboutUS;
