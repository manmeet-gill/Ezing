import React, {Component} from 'react';
import Country from './country'
import CA from '../../images/canada.png'
import USA from '../../images/usa.png'
import UK from '../../images/uk.png'
import NZ from '../../images/newzealand.png'
import AU from '../../images/australia.png'
import IR from '../../images/ireland.png'
import SI from '../../images/singapore.png'
export default class homepage extends Component {
    render() {
    var lists = {
        points: [this.makeList("CA"),this.makeList("USA"),this.makeList("UK"),this.makeList("AU"),this.makeList("NZ"),this.makeList("IR"),this.makeList("SI")]

    };
        return (
            <div>
            <Country name={"Canada"}
                     index={0}
                     p1={"The second largest country in the world, Canada covers the" +
                     " entire northern part of the North American continent, with the exception of Alaska."+"\t\n"+" It is a bilingual nation with both English and French as official languages at the federal level."
                     }
                     p2={"Canada is deserved of its reputation for magnificent scenery, " +
                     "cleanliness, plentiful wildlife, peace, diversity and vast spaces. Toronto is the largest city and commercial hub whereas Ottawa is the capital of Canada."
                     }
                     lists={lists}
                        pic={CA}
            />
                <Country name={"USA"}
                         index={1}
                         p1={"The United States of America (commonly referred to as the United States, the U.S., the USA, or America) is a federal constitutional republic comprising fifty states and a federal district.The country is situated mostly in central North America, where its forty-eight contiguous states and Washington, D.C., the capital district, lie between the Pacific and Atlantic Oceans, bordered by Canada to the north and Mexico to the south.The state of Alaska is in the northwest of the continent, with Canada to the east and Russia to the west across the Bering Strait.The country also possesses several territories in the Caribbean and Pacific. New York City is the largest city in US.\n"}
                         p2={"The United States is the third or fourth largest country by total area, and the third largest both by land area and population. It is one of the world’s most ethnically diverse and multicultural nations, the product of large-scale immigration from many countries The U.S. economy is the largest national economy in the world.\n" +
                         "\n"}
                         lists={lists}
                         pic={USA}
                />
                <Country name={"UK"}
                         index={2}
                         p1={"UK life is an incredible mix of international cultures and contemporary thinking, held together by a strong sense of identity and tradition. Study in the UK and you’ll find an array of exciting experiences to discover – music, celebrations, accents, people to meet, places to visit – the list is endless. As the UK is such a cosmopolitan society you’ll find that many UK customs are already familiar to you – so you’ll settle in faster than you think.\n"}
                         p2={"The UK is bursting with energy and has a fascinating heritage ready to explore. As an international student you’ll fit straight into the UK’s multicultural society, ready to enjoy a student life full of excitement, fun and creativity. The official language in UK is English.\n" +
                         "\n" +
                         "There are plenty of options for travelling in the UK. Whether you’ve just arrived or you’re ready to start exploring, the UK transport network will take you from the largest cities to the smallest villages. You can travel by train, bus, taxi or bicycle throughout the UK – with plenty of discounts available to international students."}
                         lists={lists}
                         pic={UK}
                />
                <Country name={"AUSTRALIA"}
                         index={3}
                         p1={"The Australian education system has a strong international reputation and is known for its effective structure and innovative policy developments. Studying in Australia promotes innovative, creative and independent thinking.\n"}
                         p2={""}
                         lists={lists}
                         pic={AU}
                />
                <Country name={"NEW ZEALAND"}
                         index={4}
                         p1={"New Zealand’s spectacularly beautiful landscape includes vast mountain chains, steaming volcanoes, sweeping coastlines, deeply indented fiords and lush rainforests. Wellington is the capital of New Zealand. It has a great public transport system. Wellington is the home of art and culture and there’s always something for everyone. From live theatre and performances every night at one of our local theatres to major annual and biennial arts and sports festivals.\n" +
                         "Comparable in size and/or shape to Great Britain, Colorado or Japan, New Zealand has a population of only 4 million – making it one of the world’s least crowded countries."}
                         p2={" It is a heaven for those seeking peace, rejuvenation and relaxation as well as a playground for thrill seekers and adventurers.\n" +
                         "A temperate climate with relatively small seasonal variation makes it an ideal year-round holiday destination.\n" +
                         "Though a diverse and multicultural people, there are many qualities, including friendliness, individuality, invention and self-reliance, that you’ll find in most New Zealanders."}
                         lists={lists}
                         pic={NZ}
                />
                <Country name={"IRELAAND"}
                         index={5}
                         p1={"Ireland is a dynamic, lively and modern country with a young population and a successful, technologically orientated economy but it remains a country where music, conversation, culture, traditions, time to relax, listen and make friends matter. A country with cultured, cosmopolitan cities renowned for its beautiful, unspoiled countryside and scenery. The capital of Ireland is Dublin. The official currency of Ireland is Euro.\n" +
                         "Ireland is renowned worldwide for its friendliness and its welcome to visitors. A strong sense of community abounds. Ireland is a highly developed democracy with a modern economy. The Irish economy is particularly strong in the areas of software development, pharmaceuticals, manufacturing and international services."}
                         p2={"Ireland is beautiful – much of the countryside remains unspoilt providing an excellent natural habitat for a flourishing flora and fauna. Ireland’s landscape provides a rich environment for the many outdoor leisure pursuits for which it is famous. Water sports, hill walking, rocking climbing and caving are just\n" +
                         "a few of the many activities which can be enjoyed when taking a break from study."}
                         lists={lists}
                         pic={IR}
                />
                <Country name={"SINGAPORE"}
                         index={6}
                         p1={"Singapore, officially the Republic of Singapore, is an island city-state off the southern tip of the Malay Peninsula, south of the Malaysian state of Johor and north of Indonesia’s Riau Islands.Singapore is a microstate and the smallest nation in Southeast Asia. It is substantially larger than Monaco and Vatican City, the only other present-day sovereign city-states.The local currency in Singapore is Singapore Dollars.\n"}
                         p2={"The population of Singapore is highly cosmopolitan and diverse. It includes Chinese, Malays, Indians, Eurasians, Caucasians and Asians of different origins.\n" +
                         "\n" +
                         "The population of Singapore is highly cosmopolitan and diverse. It includes Chinese, Malays, Indians, Eurasians, Caucasians and Asians of different origins.\n" +
                         "\n" +
                         "There are 4 official languages in Singapore –\n" +
                         "• Malay     • Mandarin Chinese     • English     • Tamil\n" +
                         "\n" +
                         "English is the main language of business and administration and is widely spoken and understood."}
                         lists={lists}
                         pic={SI}
                />

            </div>

        )
    }

    makeList(countryName)
    {
        var finallist="";
        switch(countryName){
            case "CA" :
                finallist = ["It Offers You An Opportunity To Be A Part Of One Of The Best Educational Systems In The World",
                "Its Multicultural Cosmopolitan Attitude Makes It A Wonderful Destination For Foreign Students\n" +
                "Degrees You Receive Are Internationally Recognized",
                "You Can Opt From Diverse Range Of Courses Offered, From Marine Biology To Accountancy, To Aviation",
                "A Safe, Stable Country That Has An Excellent Health Care System",
                "The Cost Of Education And Cost Of Living Are Relatively Low, Adding Canadian Education System An Extra Value",
                "The Country Is An International Leader In Computer And Information Technology And Has A Reputation Of Excellence In Sectors Like Telecommunications, Transportation And Engineering"];
                break;
            case "USA" :
                finallist = ["World Class Learning Institutions",
                    "Endless Study Choices","Worldwide Recognition",
                    "Supporting Industries, Training & Research",
                    "People From Varied Cultures",
                    "Latest Technology",
                    "Flexible Education System",
                    "Comprehensive And Global Curriculum",
                    "Campus Life Worth Experiencing services"];
                break;
            case "UK":
                finallist = ["United Kingdom Is Fast Emerging As One Of The Most Popular Destinations For Studies.",
                            "UK Postgraduate Qualification Is Reputed And Valued All Over The World.",
                            "No GRE, GAMT, SAT Requirements.",
                            "Most Of The Universities Have No Application Fee."];
                    break;
            case "AU":
                finallist = ["Australia Is A Safe, Friendly And Harmonious Country. When You Arrive You May Find Yourself Struck By The Friendliness And Hospitality Of The People.",
                            "Australia Is A Very Safe Country Compared With Almost Anywhere In The World. Political Unrest Is Limited In Australia, Crime Rates Are Low And Strict Gun Control Laws Provide A Safe Environment.",
                            "As One Of The Most Multicultural Countries In The World, Australia Is Accepting Of All Religions. Your Right To Practice Your Faith Without Persecution Or Discrimination Is Protected By Law. You’ll Find Australia To Be Very Friendly And Welcoming.",
                            "Australians Value The Wealth Of Cultural Diversity And Social Sophistication That International Students Bring To Our Campuses And Communities. It’s Easy For Students To Adjust To The Australian Way Of Life.",
                            "Australians Are Open, Friendly People And You Will Receive A Warm Welcome. Many Students Living In Homestay Experience Australian Family Life In A Natural, Friendly Way And Often They Find Themselves Treated Like A Family Member. Wherever You Live – Homestay, Boarding School, Or Campus Accommodation – You Will Discover Many Opportunities To Make Lasting Friendships."
                            ];
                    break;
            case "NZ":
                finallist=["Studying In New Zealand Is A Great Way To See The Country While You Gain New Knowledge And Skills. The New Zealand Education System Is Highly Regarded, Internationally Recognized And Has High Academic Standards.",
                "Courses Are Available For Academic, Professional And Vocational Studies At Universities, Polytechnics, Colleges, Secondary Schools And Private Training Establishments."
                ];
                break;
            case "IR":
                finallist=["Irish Education Is Of The Highest International Quality",
                "It Prepares People For Success",
                "It Has Close Links To Industry And Is Characterized By Creativity, Flexibility, Agility, Pragmatism And Informality",
                "Education Was A Key Factor In Making Ireland One Of The Fastest Growing Economies In The World Over The Past Decade",
                "Investment In Research And “4th Level” Education Is A Key Plank In Developing Ireland As A Knowledge Society in The New Global Economy"];
                break;
            case "SI":
                finallist = ["Hub For Educational Excellence",
                            "Stable Economy",
                            "Infrastructure And Accessibility",
                            "A Multicultural Nation With A High Quality Of Life",
                            "A Vibrant City Lifestyle"];
                break;
            default:
                finallist="";



        }
        return finallist;
    }

}