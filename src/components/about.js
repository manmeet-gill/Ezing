import React, { Component } from 'react'
import { Header, Grid, Segment } from 'semantic-ui-react'
import Menu from '../components/landingpage/menu'
import Bottom from '../components/landingpage/bottom'

export default class Menubar extends Component {
    render() {
        return (
        <div>
            <Menu/>
            <Segment>

            <Grid columns={3} stackable textAlign='justified'>
                <Grid.Column>
                    <Header as='h2'>WHO WE ARE
                    </Header>
                    <p><b>E-Zing Overseas Educational Consultancy</b> is working as an Overseas Educational Services. For the past many years, we have been sending hundreds of students every year to various highly reputed Universities/ Colleges in UK, Ireland, USA, Canada, Australia, New Zealand and France.We believe that the number of students who want to study in overseas countries will be increasing every year.
                    </p>
                </Grid.Column>
                <Grid.Column>

                <p>As professional educational consultants, we provide services such as Career counseling, Student academic assessment, Organizing awareness seminars, Admissions, Visa guidance, Pre departure orientation and survival tips for living and studying in the host country.
                    </p>
                    <p>These days, life is characterized by intense competition in every sphere. Every career, every profession is marked by the spirit of one-upmanship. The desire to be the best in the chosen field is all-pervasive. And it is this vaulting ambition that fans the embers of the passion to succeed.In this mission, the need to have a strong foundation and solid grounding in the subject,
                    </p>
                </Grid.Column>
                <Grid.Column>

                    <p>
                        as well as qualifications from a good institution, cannot be over-emphasized.
                        This fact is recognized and appreciated by students today. That’s the reason youngsters prefer studying and graduating from premier universities abroad, which would open up many more doors for them and also lend them an advantage when it comes to career opportunities back home in India.
                    </p>
                    <p>We are the official representatives of several colleges and universities in different countries. With wide knowledge and experience of the overseas education system, we believe that we are perfectly placed to provide you with exactly the right service and assistance.
                    </p>
                </Grid.Column>
            </Grid>
            </Segment>
            <Segment textAlign='left'>
                <Header as='h2'>
                    DEALING WITH STUDY VISA
                </Header>
                <p>
                    We counsel you to pick and grab the best opportunity to study in foreign universities. We realize that different individuals have different needs and therefore you need various options to choose the right one to realize your dreams. A student Visa is a golden opportunity for any individual to go abroad and learn not only about the chosen course but also about life at-large.

                </p>
                <p>
                    The international education and exposure have changed lives of millions around the world, and the benefits are manifold. We ensure that the students who wish to have foreign education get the maximum benefit from our expertise and exposure. As the Management of the firm has got international qualifications and experience, they can share the same with all the aspiring students willing to study abroad. We are a student oriented firm committed to provide fair and accurate assistance and guidance to students seeking admission in educational institutions / universities in UNITED KINGDOM / USA / AUSTRALIA / CANADA / NEW ZEALAND / IRELAND / SINGAPORE.

                    The following services will help the students not only to secure admissions but also to get a visa and will make sure that they get a warm welcome as and when they land in their chosen country.
                </p>
                <p>
                    Canada<br/>
                    USA<br/>
                    UK<br/>
                    Australia<br/>
                    New Zealand<br/>
                    Singapore<br/>
                    Ireland
                </p>
            </Segment>
            <Bottom/>
        </div>
        )
    }
}