import * as React from 'react';
import { connect } from 'react-redux';
import { changeActiveCategory } from '../store/categories';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';


function Categories(props) {
  const style ={
 fontSize:'25px',
 border:'0.5px solid rgba(25,255,28)',
color : '#7CFC00',
boxShadow:'50px'
  }
    return (
        
        <section  >
            <AppBar position="static" style={{ backgroundColor: '#800080' }}>
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