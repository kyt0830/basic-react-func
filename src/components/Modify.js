import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



const Modify = (props) => {
  // [title, setTitle] = useState(props.data.title);
  // [desc, setDesc] = useState(props.data.desc);
  // [difficulty, setdifficulty] = useState(props.data.difficulty);
  const [formData, setFormData] = useState({
    title: props.data.title,
    desc: props.data.desc,
    difficulty: props.data.difficulty
  });
  const inputFormHandler = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      // 계산된 속성 값 사용하기... []문법
      [name]: value
    }));
  }
  return (
    <div className='shadow p-3 mb-5 bg-body-tertiary rounded'>
      <h2>Modify Article</h2>
      <Form action="#" onSubmit={(e) => {
        e.preventDefault();
        props.modifyForm(e.target.title.value, e.target.desc.value, e.target.difficulty.value);
      }}>
        <Form.Group className="mb-3" controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            value={formData.title}
            placeholder="제목을 입력하세요."
            onChange={inputFormHandler}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="desc">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            name="desc"
            value={formData.desc}
            rows={3}
            onChange={inputFormHandler}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="difficulty">
          <Form.Label>difficulty</Form.Label>
          <Form.Control
            type="number" min="0" max="10" name="difficulty"
            value={formData.difficulty}
            onChange={inputFormHandler}
          />
        </Form.Group>
        <Button type="submit" variant="secondary">입력</Button>
      </Form>
    </div>
  )
}





// class Modify extends Component {
//   // constructor(props){
//   //   super(props);
//   // this.state = {
//   //   title:this.props.data.title,
//   //   desc:this.props.data.desc,
//   //   difficulty:this.props.data.difficulty
//   // }
//   // }
//   inputFormHandler = (e) => {
//     this.setState({
//       [e.target.name]: e.target.value
//     });
//   }
//   render() {
//     console.log('Modify.js 실행');
//     return (
//       <div className='shadow p-3 mb-5 bg-body-tertiary rounded'>
//         <h2>Modify Article</h2>
//         <Form action="#" onSubmit={(e) => {
//           e.preventDefault();
//           this.props.modifyForm(e.target.title.value, e.target.desc.value, e.target.difficulty.value);
//         }}>
//           <Form.Group className="mb-3" controlId="title">
//             <Form.Label>Title</Form.Label>
//             <Form.Control
//               type="text"
//               name="title"
//               value={this.state.title}
//               placeholder="제목을 입력하세요."
//               onChange={this.inputFormHandler}
//             />
//           </Form.Group>
//           <Form.Group className="mb-3" controlId="desc">
//             <Form.Label>Description</Form.Label>
//             <Form.Control
//               as="textarea"
//               name="desc"
//               value={this.state.desc}
//               rows={3}
//               onChange={this.inputFormHandler}
//             />
//           </Form.Group>
//           <Form.Group className="mb-3" controlId="difficulty">
//             <Form.Label>difficulty</Form.Label>
//             <Form.Control
//               type="number" min="0" max="10" name="difficulty"
//               value={this.state.difficulty}
//               onChange={this.inputFormHandler}
//             />
//           </Form.Group>
//           <Button type="submit" variant="secondary">입력</Button>
//         </Form>
//       </div>
//     )
//   }
// }

export default Modify;
