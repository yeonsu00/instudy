import { useState, useEffect } from "react";
import { Container, Row } from 'react-bootstrap';
import '../group/GroupCreateModal.css';
import {Autocomplete, Checkbox, FormHelperText, InputLabel, TextField} from "@mui/material";
import { tags } from '../../assets/tag/tags'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faPlus } from '@fortawesome/free-solid-svg-icons'
import Form from 'react-bootstrap/Form';
import axios from "axios";
import FormControl from '@mui/material/FormControl';
import {Input} from "@mui/icons-material";

const GroupCreateModal = (props) => {
  const closeModal = () => {
    props.setModalOpen(false);
  }

  const [group, setGroup] = useState({
      groupName: '',
      description: '',
  });

    const handleChange = (prop) => (event) => {
        setGroup({...group, [prop]: event.target.value});
    }

  const createGroup = () => {
      axios
          .post('/group/new', {
              groupName: group.groupName,
              description: group.description,
              manager: props.manager,
          })
          .then((res) => {

          })
          .catch();
  };

  const [selectedSkillTags, setSelectedSkillTags] = useState([]);

  const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
  const checkedIcon = <CheckBoxIcon fontSize="small" />;

    return (
        <div>     
<div class="row">
        <div class="col-md-12 col-lg-6"></div>

        <div class="d-flex justify-content-end align-items-end">

<div className="rounded-icon">
<FontAwesomeIcon icon={faSearch} />
</div>

</div>
        </div>

        <div class="row">
        <div class="col-md-12 col-lg-6"></div>

        <div class="d-flex justify-content-end align-items-end">

<div className="rounded-icon">
<button style={null} data-mdb-toggle="modal" data-mdb-target="#exampleModal">
<FontAwesomeIcon icon={faPlus} />
</button>
</div>

</div>
        </div>

          <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">그룹 생성하기</h5>
        <button type="button" class="btn-close" data-mdb-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">

      <Form>
      <Container>
        <Row>

        {/* <div class="form-outline mb-4">
    <input type="text" id="form4Example1" class="form-control" />
    <label class="form-label" for="form4Example1">그룹 이름(groupName)</label>
  </div> */}

  {/*<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">*/}
  {/*      <Form.Label>그룹 이름(groupName)</Form.Label>*/}
  {/*      <Form.Control type="email" placeholder="그룹 이름을 입력하세요" onChange={handleChange('groupName')} />*/}
  {/*    </Form.Group>*/}

  {/*</Row>*/}
  {/*      <Row>*/}

  {/*<Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">*/}
  {/*      <Form.Label>그룹 설명(description)</Form.Label>*/}
  {/*      <Form.Control as="textarea" rows={3} placeholder="그룹 설명을 입력하세요" onChange={handleChange('description')} />*/}
  {/*    </Form.Group>*/}

            <FormControl>
                <InputLabel htmlFor="my-input">그룹 설명(description)</InputLabel>
                <Input id="my-input" aria-describedby="my-helper-text" />
                <FormHelperText id="my-helper-text">그룹 설명을 입력하세요</FormHelperText>
            </FormControl>

          </Row>
        <Row>

          <b>공부 종류 키워드(projectStack)</b>
          <Autocomplete
                                multiple
                                options={tags.tech}
                                disableCloseOnSelect
                                getOptionLabel={(option) => option.label}
                                value={selectedSkillTags}
                                onChange={(event, newValue) => {
                                    setSelectedSkillTags(newValue);
                                }}
                                renderOption={(props, option, { selected }) => (
                                    <li {...props}>
                                        <Checkbox
                                            icon={icon}
                                            checkedIcon={checkedIcon}
                                            style={{ marginRight: 8 }}
                                            checked={selected}
                                        />
                                        {option.label}
                                    </li>
                                )}
                                renderInput={(params) => (
                                    <TextField {...params} label="이 그룹에서 공부하려는 것은..." placeholder="키워드" />
                                )}
                            />

          </Row>
        <Row>

          <b>그룹 정원(capacity)</b>
          <div class="col-3">
          <Form.Select aria-label="Default select example">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      </Form.Select>
  </div>

          </Row>
        </Container>

        </Form>

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-mdb-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" onClick={() => createGroup()}>그룹 생성</button>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default GroupCreateModal;