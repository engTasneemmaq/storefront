import * as React from 'react';
import { connect } from 'react-redux';
import { changeActiveCategory } from '../store/categories';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';


function Categories(props) {
  const style ={
 fontSize:'15px',
 border:'0.5px solid rgba(25,255,28)',
color : '#fff',
boxShadow:'30px'
  }
    return (
        
        <section  >
            <AppBar position="static">
                <Tabs >
                {
                    props.categories.categories.map((category) => {
                        return (
                            <Tab style={style} label={category.displayName} key={category.name} onClick={() => props.changeActiveCategory(category.name)}>
                                {category.displayName}
                            </Tab>
                        );
                    })
                }
                </Tabs>
            </AppBar>
        </section>
    );
}

const mapStateToProps = (state) => {
    return { categories: state.categories };
}

const mapDispatchToProps = { changeActiveCategory }

export default connect(mapStateToProps, mapDispatchToProps)(Categories)