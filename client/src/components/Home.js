/* eslint-disable react/jsx-no-target-blank */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withNamespaces } from 'react-i18next'

import {
  Card,
  CardBody,
  CardHeader
} from 'reactstrap'

class Home extends Component {
  render () {
    const { t } = this.props

    return (
      <div>
        <Card>
          <CardHeader><h3>{t('What is Reactify Boilerplate?')}</h3></CardHeader>
          <CardBody>
            <h4>{t('Frontend: React')}</h4>
            <p>
              Reactify Boilerplate {t('uses')} <a href='https://reactjs.org' target='_blank'>React</a>
              {' '}
              ({t('via')} <a href='https://github.com/facebook/create-react-app' target='_blank'>Create React App</a>) {t('as a')} frontend framework.
            </p>
            <p>{t('Includes')}:</p>
            <ul>
              <li><a href='https://getbootstrap.com' target='_blank'>Bootstrap 4</a> ({t('via')} <a href='https://reactstrap.github.io/' target='_blank'>reactstrap</a>)</li>
              <li><a href='https://bootswatch.com' target='_blank'>Bootswatch Themes</a></li>
              <li><a href='https://reacttraining.com/react-router' target='_blank'>React Router</a></li>
              <li><a href='https://redux.js.org/' target='_blank'>Redux</a></li>
              <li><a href='https://github.com/fkhadra/react-toastify' target='_blank'>React-Toastify</a></li>
              <li><a href='https://fontawesome.com' target='_blank'>FontAwesome</a></li>
              <li><a href='https://daneden.github.io/animate.css' target='_blank'>Animate.css</a></li>
              <li><a href='https://github.com/VincentGarreau/particles.js' target='_blank'>Particles.js</a></li>
              <li><a href='https://react.i18next.com' target='_blank'>{t('Internationalization')} ({t('via')} react-i18next)</a></li>
            </ul>

            <hr />

            <h4>Backend: Restify</h4>
            <p>Reactify Boilerplate {t('uses')} <a href='http://restify.com'>Restify</a> {t('as a')} backend server.</p>
            <p>{t('Includes')}:</p>
            <ul>
              <li><a href='https://mongoosejs.com' target='_blank'>Mongoose</a></li>
              <li><a href='https://github.com/mashpie/i18n-node' target='_blank'>{t('Internationalization')} ({t('via')} i18n)</a></li>
              <li>{t('User login/signup is already implemented for you')}</li>
            </ul>

            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus nulla ipsum expedita obcaecati dignissimos deleniti amet modi accusantium dolorum iste nesciunt commodi maiores qui aperiam beatae tempore vel harum sed veritatis quisquam optio magni, nobis id voluptatibus. Beatae, sequi voluptatibus? Dicta rem amet natus, nisi illo vitae dignissimos officiis maxime fuga suscipit necessitatibus quod fugiat possimus, asperiores labore hic quo animi vero sint optio! Dignissimos, maiores earum libero ea deserunt totam minus ipsum at autem sit, excepturi nesciunt, iusto facilis reiciendis! Eligendi sapiente quam quaerat ipsum iusto, architecto dolor! Impedit accusantium iusto dolorem deleniti temporibus animi a odit natus nam dolore nihil, soluta officiis fuga! Eaque iusto dolores officia maiores qui inventore quis quos in deleniti perspiciatis porro laborum sint molestiae ad perferendis, eos quaerat at atque voluptatibus beatae nesciunt. Labore rerum ex vero magnam, animi nesciunt accusantium magni hic temporibus cum, dolorem quas quidem, ratione dolores repudiandae? Voluptates repudiandae repellat cum maiores magnam. Molestias illum ratione tempore neque, impedit repellendus asperiores voluptatem similique nulla consectetur voluptatibus veniam odit nobis eaque blanditiis eveniet cumque? Maxime sint dicta tempore dolor quia eligendi, necessitatibus obcaecati repellendus natus cupiditate nemo eum. Vel hic placeat dicta commodi. Aut dolorem nobis, cumque, ad consectetur in ea saepe consequuntur harum facere ut, cum enim. Ipsam quas quibusdam facere animi laborum quisquam dolorem sequi impedit ducimus soluta eius omnis sit optio illo quasi culpa unde ipsum aut, inventore nulla nostrum. Laudantium eveniet soluta perspiciatis explicabo alias doloribus. Voluptatibus molestiae magnam sunt ratione ut inventore veniam quod reprehenderit possimus rerum! Asperiores, repellat. Corrupti earum praesentium natus qui unde deserunt incidunt, eius laboriosam nihil ipsum maiores atque accusamus et debitis corporis possimus adipisci quo reprehenderit iste quam! Dignissimos impedit sapiente atque sunt. Exercitationem harum fuga similique vel expedita corporis dolores, alias doloribus officia dicta doloremque laudantium! Perspiciatis, nobis ut nesciunt facilis deserunt, inventore ipsum magnam dolorum, ipsa culpa eveniet! Quisquam at aut quae nemo provident, natus quidem nulla quas repellendus alias eligendi facilis et quis ex aspernatur ad cumque velit? Ut fugiat provident, repellendus eaque porro aperiam a dicta quae quis. Repudiandae pariatur modi corporis voluptatibus perferendis quasi non velit aut cumque est exercitationem, repellendus dignissimos deserunt inventore blanditiis quia placeat necessitatibus. Dicta totam, mollitia reiciendis blanditiis quae eligendi sed unde minus officiis qui, placeat quidem ea enim eos at assumenda rem incidunt accusamus consequuntur porro in fugit? Odio, ipsa! Pariatur, repellat quidem sint adipisci voluptatum ipsam quas beatae unde et ut, aliquid voluptate vero nihil debitis fugit quasi est asperiores hic porro quis laboriosam veniam! Fugiat nam mollitia molestiae ab quas! Sit reiciendis nostrum eveniet facilis illo sapiente! Iste, possimus amet. Labore, repudiandae! Placeat, quisquam dicta quia incidunt asperiores assumenda dolorum velit eaque pariatur ab autem porro aspernatur tenetur? Similique fuga in at soluta repellendus quas excepturi, dicta sed magnam numquam qui distinctio, delectus optio rerum eaque nostrum pariatur odio tempora, eum facere dignissimos. Temporibus corrupti, iusto excepturi quam nam atque minus dolorum animi facilis sit dolorem inventore repellat! Repudiandae ullam impedit mollitia culpa minima? Commodi, esse dicta.</p>
          </CardBody>
        </Card>
      </div>
    )
  }
}

const mapStateToProps = state => state

export default connect(mapStateToProps)(withNamespaces()(Home))
