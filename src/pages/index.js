import Layout from '../components/layout';
import Title from '../components/layout/title';
import Colors from '../components/layout/colors';

export default function Index() {
    
    return (
        <Layout>
            <Title color={Colors.covid}>
                Plan contra el Covid
            </Title>
        </Layout>
    );
}