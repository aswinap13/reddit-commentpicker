import React from 'react'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

function CommentDisplay() {

    // Mapped Logic

  return (
    <div className='postContain'>
        {/* To be mapped and show the post rwalted to the URL || embedded Html */}
        <iframe id="reddit-embed" src="https://www.redditmedia.com/r/Cricket/comments/vxb775/four_ducks_for_englands_batters_in_the_first_odi/?ref_source=embed&amp;ref=share&amp;embed=true" sandbox="allow-scripts allow-same-origin allow-popups" ></iframe>
        <div className="commentSection ">
            <form>
                <input 
                    type="text" 
                    name="keyword" 
                    size="40" 
                    placeholder='Enter the KeyWord'></input>
                <Button className='btn' variant='success' type="submit">Submit</Button>
            </form>
        </div>

    </div>
  )
}

export default CommentDisplay