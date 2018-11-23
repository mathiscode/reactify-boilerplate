/* eslint-disable react/jsx-no-target-blank */

import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
  Card,
  CardBody,
  CardHeader
} from 'reactstrap'

class Home extends Component {
  render () {
    return (
      <div>
        <Card>
          <CardHeader><h3>What is Reactify Boilerplate?</h3></CardHeader>
          <CardBody>
            <h4>Frontend: React</h4>
            <p>
              Reactify Boilerplate uses <a href='https://reactjs.org' target='_blank'>React</a>
              {' '}
              (via <a href='https://github.com/facebook/create-react-app' target='_blank'>Create React App</a>) as a frontend framework.
            </p>
            <p>Includes:</p>
            <ul>
              <li><a href='https://reacttraining.com/react-router' target='_blank'>React Router</a></li>
              <li><a href='https://redux.js.org/' target='_blank'>Redux</a></li>
              <li><a href='https://github.com/fkhadra/react-toastify' target='_blank'>React-Toastify</a></li>
              <li><a href='https://getbootstrap.com' target='_blank'>Bootstrap 4</a> (via <a href='https://reactstrap.github.io/' target='_blank'>reactstrap</a>)</li>
              <li><a href='https://bootswatch.com' target='_blank'>Bootswatch Themes</a></li>
              <li><a href='https://fontawesome.com' target='_blank'>FontAwesome</a></li>
              <li><a href='https://daneden.github.io/animate.css' target='_blank'>Animate.css</a></li>
              <li><a href='https://react.i18next.com' target='_blank'>Internationalization (via react-i18next)</a></li>
            </ul>

            <hr />

            <h4>Backend: Restify</h4>
            <p>Reactify Boilerplate uses <a href='http://restify.com'>Restify</a> as a backend server.</p>
            <p>Includes:</p>
            <ul>
              <li><a href='https://mongoosejs.com' target='_blank'>Mongoose</a></li>
              <li><a href='https://github.com/mashpie/i18n-node' target='_blank'>Internationalization (via i18n)</a></li>
              <li>User login/signup is already implemented for you</li>
            </ul>

            <hr />

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae consectetur assumenda voluptatem dicta ratione magnam obcaecati, asperiores sint illo laborum quia vitae fuga distinctio molestias quibusdam atque sequi hic dolores in harum fugiat ad voluptate natus necessitatibus. Veniam corporis facere earum similique asperiores a fugit distinctio pariatur veritatis repellendus facilis beatae natus ducimus dicta voluptatum, quisquam repudiandae optio laudantium necessitatibus possimus quae consequuntur nam? Beatae tenetur eum, aspernatur necessitatibus praesentium aperiam eaque eos tempore, soluta asperiores consectetur ullam sit saepe sapiente assumenda eligendi unde modi. Quam, sunt nihil odit fugiat amet consequatur mollitia, minima quas provident, ipsum vero? Tempora saepe eius rem debitis fuga odio voluptatibus minus sint tenetur nemo. Maxime quibusdam dicta cum ad qui quae, beatae quas veritatis aliquam! Aut ex consectetur nesciunt neque maiores rerum facere tenetur esse quas praesentium pariatur eum necessitatibus quaerat nostrum quo hic nulla nemo sit eos placeat accusantium, numquam est earum. Molestiae, alias. Laborum quis aliquam inventore esse odio aut recusandae itaque distinctio exercitationem illo. Rem, a dolorum. Alias neque laborum labore facere veritatis quam voluptates reprehenderit rem suscipit dolores dignissimos omnis perspiciatis doloremque, eligendi vitae cupiditate ipsa vero ea laudantium voluptatibus eaque aut enim voluptatum officiis. Dolorum praesentium aperiam animi eius perferendis tempore temporibus quod, quasi repellendus sequi corrupti, alias at. Rerum odit facilis sequi velit! Facere architecto amet illo doloremque provident exercitationem quis, magni earum quos repellendus reprehenderit atque expedita, optio, corrupti molestiae enim quia maiores. Dolor quos doloremque aliquam fugiat, ipsa incidunt quia possimus aliquid ut repudiandae delectus maiores quis voluptates veniam odit, obcaecati impedit exercitationem voluptatem temporibus tenetur. Vel voluptatum impedit, laboriosam velit quas blanditiis voluptates quae esse iure reprehenderit laborum veniam nostrum, dicta laudantium, animi error quam exercitationem praesentium nesciunt. Quae ullam doloribus ex non exercitationem! Magnam perspiciatis commodi minus aliquid vel eius repellendus nostrum eveniet deserunt unde, architecto qui dicta odit ex accusantium ipsa. Esse dolores, est neque accusantium eum molestiae ipsam ut vitae unde at doloribus tempora deleniti voluptatem beatae expedita eveniet incidunt accusamus, laudantium nihil dignissimos impedit totam praesentium aliquid. Harum perferendis nulla esse ut eius sed laudantium porro voluptatem eaque dolorem consectetur, doloribus minima aliquid, expedita quis quos atque ipsam, illo nihil ad. Eius neque rem voluptate porro modi doloremque consectetur quasi, iure quisquam odit laboriosam sequi quae molestias, at natus autem omnis sint ipsum itaque inventore. Ab doloribus quis obcaecati aut deserunt. Sit, quo facilis. Incidunt repudiandae quod ad impedit, consequatur vitae, facere officiis ab dolore temporibus distinctio rem aspernatur quo dicta aperiam consequuntur? Nam, quam rem, mollitia illum quaerat non cum, eum laboriosam corrupti quis facere commodi earum cumque repellat sapiente vero modi optio architecto? Nisi minus labore quae laboriosam officia molestiae eos libero quia nesciunt eius quaerat ipsa rem totam, voluptatem quasi dolore ut! In ex corrupti delectus officia nesciunt adipisci similique, nostrum laudantium corporis voluptatibus asperiores id accusantium laborum perferendis veniam error, unde suscipit nam vero ipsum aperiam eum cumque! Ea rerum libero sit a praesentium voluptatem optio dolor eum quas, ut mollitia. Itaque temporibus iure a eius commodi!</p>
          </CardBody>
        </Card>
      </div>
    )
  }
}

const mapStateToProps = state => state

export default connect(mapStateToProps)(Home)
