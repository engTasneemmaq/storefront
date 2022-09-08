import * as React from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { changeActiveCategory } from '../store/categories';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useEffect } from 'react';
import { Breadcrumbs } from '@mui/material';
import Link from '@material-ui/core/Link';
import { getRemoteData } from '../thunk/thunk';


function Categories(props) {
    const dispatch = useDispatch();
    const state = useSelector(state => state.categories);
  
    useEffect(() => {
      dispatch(getRemoteData()).then(() => {
        dispatch(changeActiveCategory("electronics"));
      });
    }, [])

//   const style ={
//  fontSize:'25px',
//  border:'0.5px solid rgba(25,255,28)',
// color : '#7CFC00',
// boxShadow:'50px'
//   }
    return (
        <>
      <Breadcrumbs className='cat' aria-label="breadcrumb" style={{ marginLeft: '40%', fontSize: '30px',marginTop: '1%', color: '#FFFFE0', cursor: 'pointer' }}>
        {state.categories.map((element, idx) => {

          return <Link color=" white" key={idx} onClick={() => {dispatch(changeActiveCategory(element.name)) }}>
            {element.displayName}
          </Link>
        })}
      </Breadcrumbs>
      <div style={{ marginLeft: '43%', fontSize: '55px', marginTop: '2%', color: '#FFFFE0'}}>{state.activeCategory.displayName}</div>
      <div style={{ marginLeft: '35%', fontSize: '35px', marginTop: '2%', color: '#FFFFE0' }}>{state.activeCategory.description}</div>
    </>
  )
}

        
        // <section  >
        //     <AppBar position="static" style={{ backgroundColor: '#800080' }}>
        //         <Tabs >
        //         {
        //             props.categories.categories.map((category) => {
        //                 return (
        //                     <Tab style={style} label={category.displayName} key={category.name} onClick={() => props.changeActiveCategory(category.name)}>
        //                         {category.displayName}
        //                     </Tab>
        //                 );
        //             })
        //         }
        //         </Tabs>
        //     </AppBar>
        // </section>
//     );
// }

const mapStateToProps = (state) => {
    return { categories: state.categories };
}

const mapDispatchToProps = { changeActiveCategory }

export default connect(mapStateToProps, mapDispatchToProps)(Categories)