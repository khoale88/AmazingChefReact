/**
 * Created by khoale on 11/25/2017.
 */
import React from "react";
import Modal from "react-modal";
import {RecipeView} from "./component/RecipeView";
import FaChevronLeft from "react-icons/lib/fa/chevron-left";
import FaChevronRight from "react-icons/lib/fa/chevron-right";
import MdLink from "react-icons/lib/md/link";
import {Button} from "./component/Button";
import ReactTooltip from "react-tooltip";
import MdPrint from "react-icons/lib/md/print";

export class RecipeViewModalBackForward extends React.Component {

    render() {
        return (

            <Modal
                isOpen={this.props.isOpen}
                onRequestClose={this.props.onRequestClose}
                contentLabel={'RecipeView'}
                className={'box box-hightlight main-background recipe-view-modal scrollbar'}
                overlayClassName={'common-modal-overlay'}>
                <Button onClick={() => window.open(`/recipes/${this.props.recipe._id}`)}>
                    <MdLink  data-tip data-for='recipeNewTab'/>
                    <ReactTooltip id='recipeNewTab'>
                        <span>Open this recipe in new tab with a link</span>
                    </ReactTooltip>
                </Button>

                <Button onClick={() => window.print()}>
                    <MdPrint  data-tip data-for='recipePrint'/>
                    <ReactTooltip id='recipePrint'>
                        <span>Print this recipe</span>
                    </ReactTooltip>
                </Button>

                <RecipeView
                    recipe={this.props.recipe}/>

                <div className={'prev-next-icons'}>
                    <FaChevronLeft
                        size={50}
                        style={{position: 'absolute', top: '50%', left: 160}}
                        onClick={this.props.prev}/>
                </div>
                <div className={'prev-next-icons'}>
                    <FaChevronRight
                        size={50} style={{position: 'absolute', top: '50%', right: 160}}
                        onClick={() => this.props.next()}/>
                </div>
            </Modal>

        )
    }
}