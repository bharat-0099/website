import React from 'react'
import './Business.css';
import address from '../../assets/address.png';
import catlog from '../../assets/catlog.png';
import payment from '../../assets/payment.png';
import grade from '../../assets/grade.png';
import help from '../../assets/help.png';
import welcome from '../../assets/welcome.png';
import singup from '../../assets/singup.png';


const Business = () => {
    return (
        <div id='Business' className='bus'>
            <div className="bus-title">
                <h1>Business Model</h1>
            </div>
            <div className="bus-overview">
                <h2>Overview:</h2>
                <p>
                    In the current market, rice buyers face significant limitations when trying to find products that match their specific preferences. Most physical stores and even online platforms offer limited varieties of rice, with little to no customization options. Customers often struggle to find the exact type of rice they want—whether it's a particular variety, grade, or polishing level. Additionally, for businesses like restaurants or retailers, sourcing rice in bulk that meets consistent quality standards can be a challenge, leading to potential inefficiencies and quality concerns.
                </p>
                <p>
                    Moreover, the quality of rice is not always guaranteed, and customers are forced to rely on generic options that may not meet their standards in taste or nutritional value. This lack of flexibility and assurance creates frustration for both individual consumers and bulk buyers alike.
                </p>
                <p>
                    There is a growing demand for personalized food options and higher transparency in food sourcing. Health-conscious consumers are more discerning about the food they buy, and businesses are looking for reliable, quality-tested suppliers. This opens up a significant opportunity for a platform that can cater to both ends by offering customization, quality testing, and flexible purchasing options.
                </p>
            </div>
            <div className='bus-sol'>
                <h2>Ideal Solution</h2>
                <p>
                    To address the lack of customization, quality assurance, and convenience in rice purchasing, I am working on a specialized e-commerce platform focused exclusively on providing a comprehensive, personalized rice shopping experience. This platform will revolutionize the way both individual consumers and businesses purchase rice by offering a range of key features:
                </p>
                <h3>Variety and Customization</h3>
                <p>
                    The platform will offer an extensive selection of rice varieties like Sona Masoori, Broken Rice, Brown Rice, etc. Customers can filter their choices based on specific variety, grade, and polishing level. This level of customization will allow consumers to buy rice tailored to their taste preferences, dietary needs, or cooking requirements. For example, someone who prefers unpolished, whole grain rice for its nutritional value can easily find and select that option.
                </p>
                <h3>Packaging and Quantity Options</h3>
                <p>
                    To cater to both households and commercial buyers, the platform will offer a variety of packaging sizes, ranging from small quantities (1kg, 3kg, 5kg) for home use to larger bulk sizes (10kg, 25kg, 50kg) for restaurants, retailers, or other businesses. This flexibility ensures that every type of customer—whether a family of four or a large restaurant chain—can find a suitable package size, minimizing waste and meeting their exact demand.
                </p>
                <h3>Quality Testing</h3>
                <p>
                    One of the most critical features of the platform will be its focus on quality assurance. Every order will undergo rigorous quality testing before being shipped, ensuring that customers receive only the best standard of rice. The platform will guarantee consistent quality, eliminating the uncertainty customers often face when buying rice from traditional retail sources. This feature not only adds value for individual buyers but also builds trust among bulk buyers who rely on consistent product quality for their businesses.
                </p>
                <h3>Testing Procedures</h3>
                <ul>
                    <li>
                        <strong>Using Color Test:</strong>
                        <p>Take some grains from the rice sample and place them on a plate or hard paper. Under bright light, inspect the rice grains for uniformity in color. High-quality rice should appear consistently white or slightly off-white. Look for any discoloration, such as yellowing, browning, or dark spots, which can indicate spoilage or poor quality.</p>
                    </li>
                    <li>
                        <strong>Age Test:</strong>
                        <p>Take some grains from the rice sample into a beaker and stir it for a few seconds. If the sample turns 'Green', it indicates the rice is freshly packed and recently harvested. If it turns 'Light Yellow', the rice is about 1-1.5 months old, and if it turns 'Bright Yellow', the sample is older than 3 months.</p>
                    </li>
                </ul>
                <h3>Targeted Business-Business Customers</h3>
                <p>
                    In addition to serving individual consumers, one of the core growth strategies for your rice e-commerce platform is to offer comprehensive, tailored solutions for business-to-business (B2B) clients. This sector includes restaurants, grocery retailers, food service providers, and hospitality businesses. These commercial buyers have unique needs—high-quality rice in bulk, consistent supply, and cost efficiency.
                </p>
                <p>
                    <strong>Contractual Supply Agreements:</strong> Offer long-term contractual agreements for businesses, ensuring they receive a steady, reliable supply of rice without having to place repeated orders. This not only guarantees your clients consistency in supply but also locks in future revenue for your platform.
                </p>
            </div>
            <div className='bus-design'></div>
            <h3>Outlined Design</h3>
            <div className="image-container">
                <div className="image-container-3">
                    <img src={singup} alt='sign up' className='image' />
                    <img src={welcome} alt='welcome' className='image' />
                    <img src={catlog} alt='catalog' className='image' />
                </div>
                <div className="image-container-4">
                    <img src={grade} alt='grade' className='image' />
                    <img src={payment} alt='payment' className='image' />
                    <img src={help} alt='help' className='image' />
                </div>
            </div>
        </div>
    )
}

export default Business
