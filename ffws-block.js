/** registers block */
wp.blocks.registerBlockType('ffws/custom-block-contact-info', {
    title: 'Company Contact Information',
    icon: 'businessman',
    category: 'design', 
    attributes: {
        companyName: { type: 'string' },
        companyEmail: { type: 'string'},
        companyPhone: { type: 'string' },
        companyAddress: { type: 'string' },
        companyAddress2: { type: 'string' },
        companyCity: { type: 'string' },
        companyState: { type: 'string' },
        companyZip: { type: 'string'},
    }, 
    /** creates form and saves info on backend */
    edit: function(props){

        function updateCompanyName(event){ props.setAttributes({companyName: event.target.value}) }
        function updateCompanyEmail(event){ props.setAttributes({companyEmail: event.target.value}) }
        function updateCompanyPhone(event){ props.setAttributes({companyPhone: event.target.value}) }
        function updateCompanyAddress(event){ props.setAttributes({companyAddress: event.target.value}) }
        function updateCompanyAddress2(event){ props.setAttributes({companyAddress2: event.target.value}) }
        function updateCompanyCity(event){ props.setAttributes({companyCity: event.target.value}) }
        function updateCompanyState(event){ props.setAttributes({companyState: event.target.value})}
        function updateCompanyZip(event){ props.setAttributes({companyZip: event.target.value})}

        return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, "Company Name"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
            type: "text",
            value: props.attributes.companyName,
            placeholder: "Company Name",
            onChange: updateCompanyName
          })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, "Company Email"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
            type: "text",
            value: props.attributes.companyEmail,
            placeholder: "hello@admin.com",
            onChange: updateCompanyEmail
          })), /*#__PURE__*/React.createElement("div", null, "  ", /*#__PURE__*/React.createElement("label", null, "Company Phone"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
            type: "text",
            value: props.attributes.companyPhone,
            placeholder: "555-555-5555",
            onChange: updateCompanyPhone
          })), /*#__PURE__*/React.createElement("div", null, "  ", /*#__PURE__*/React.createElement("label", null, "Company Address"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
            type: "text",
            value: props.attributes.companyAddress,
            placeholder: "123 Main St",
            onChange: updateCompanyAddress
          })), /*#__PURE__*/React.createElement("div", null, "    ", /*#__PURE__*/React.createElement("label", null, "Company Address Line 2"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
            type: "text",
            value: props.attributes.companyAddress2,
            placeholder: "Apt A",
            onChange: updateCompanyAddress2
          })), /*#__PURE__*/React.createElement("div", null, "    ", /*#__PURE__*/React.createElement("label", null, "Company City"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
            type: "text",
            value: props.attributes.companyCity,
            placeholder: "City",
            onChange: updateCompanyCity
          })), /*#__PURE__*/React.createElement("div", null, "    ", /*#__PURE__*/React.createElement("label", null, "Company State"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
            type: "text",
            value: props.attributes.companyState,
            placeholder: "State",
            onChange: updateCompanyState
          })), /*#__PURE__*/React.createElement("div", null, "   ", /*#__PURE__*/React.createElement("label", null, "Company Zipcode"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
            type: "text",
            value: props.attributes.companyZip,
            placeholder: "12345",
            onChange: updateCompanyZip
          })));
    },
    /** displays on front end */
    save: function(props){
        return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, props.attributes.companyName), /*#__PURE__*/React.createElement("div", null, props.attributes.companyEmail), /*#__PURE__*/React.createElement("div", null, props.attributes.companyPhone), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, props.attributes.companyAddress, ", ", props.attributes.companyAddress2, " ")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, props.attributes.companyCity, ", ", props.attributes.companyState, " ", props.attributes.companyZip)));
    }
})