import React from 'react'
import {BsCheckCircle} from 'react-icons/bs'
import {RxCrossCircled} from 'react-icons/rx'
import {IoIosPeople} from 'react-icons/io'
import {MdOutlineBedroomParent} from 'react-icons/md'
import {MdOutlinePersonOutline} from 'react-icons/md'
import {MdOutlineEmail} from 'react-icons/md'
import {HiOutlinePhone} from 'react-icons/hi'
import Input from '../../element/input/Input'
import SelectElement from '../../element/select/SelectElement'

import './BookARoom.css'

const BookARoom = () => {
  return (
    <div className="BookARoom">
      <div className="BookARoom__heading">
        <h1>Book a Room</h1>
        <div className="BookARoom__form">
          <div className="BookARoom__inputfield">
            <Input label="Check In date" type="date" icon={<BsCheckCircle />}/>
            <Input label="Check out date" type="date" icon={<RxCrossCircled />}/>
          </div>
          <div className="BookARoom__inputfield">
            <SelectElement
              label="Adults"
              icon={<IoIosPeople />}
            />
            <SelectElement
              label="Rooms"
              icon={<MdOutlineBedroomParent />}
            />
          </div>
          <div className="BookARoom__inputfield">
            <Input label="Your Name" type="text" placeholder="Enter your name" icon={<MdOutlinePersonOutline />} />
            <Input label="Email" type="text" placeholder="Enter your Email" icon={<MdOutlineEmail />} />
          </div>
          <div className="BookARoom__inputfield">
            <Input label="Phone" type="text" placeholder="Enter your Phone" icon={<HiOutlinePhone />} />
            <button>Book A Room</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookARoom
