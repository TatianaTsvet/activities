import DetailsType from './details-type';

const mapStateToProps = (state) => {
    return {
      type: state.detailReducers.details.type,
    };
  };

export default connect(mapStateToProps, { updateDetailsType })(
    DetailsType
  );

