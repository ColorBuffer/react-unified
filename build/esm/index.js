import React from 'react';
import _extends from '@babel/runtime/helpers/esm/extends';
import Head from 'next/head';
import _objectWithoutPropertiesLoose from '@babel/runtime/helpers/esm/objectWithoutPropertiesLoose';
import { View as View$1, useDimensions as useDimensions$1 } from 'react-unified';
import _inheritsLoose from '@babel/runtime/helpers/esm/inheritsLoose';
import copy from 'copy-to-clipboard';
export { default as copyToClipboard } from 'copy-to-clipboard';
import ReactCrop from 'react-image-crop';
import IM from 'react-medium-image-zoom';
import TextArea from 'react-textarea-autosize';
import { useRouter as useRouter$1 } from 'next/router';
import L from 'next/link';
import { DynamicSizeList } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';
import InfiniteLoader from 'react-window-infinite-loader';
import ReactDOM from 'react-dom';

function useTransition(_ref) {
  var input = _ref.input,
      output = _ref.output,
      duration = _ref.duration;
  var transition = duration + 's';
  var value = input ? output[0] : output[1];
  return {
    value: value,
    transition: transition
  };
}

var Audio = function Audio(_ref) {
  var props = _extends({}, _ref);

  return React.createElement("audio", props);
};

function StatusBar(_ref) {
  var backgroundColor = _ref.backgroundColor,
      barStyle = _ref.barStyle;
  return React.createElement(Head, null, React.createElement("meta", {
    name: "theme-color",
    content: backgroundColor
  }));
}

function Center(_ref) {
  var children = _ref.children,
      direction = _ref.direction,
      style = _ref.style,
      props = _objectWithoutPropertiesLoose(_ref, ["children", "direction", "style"]);

  return React.createElement(View$1, _extends({
    style: _extends({
      flexDirection: direction === 'vertical' ? 'column' : 'row',
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }, style)
  }, props), children);
}
Center.defaultProps = {
  style: {}
};

function useLegacyState(initial) {
  var _React$useState = React.useState(initial),
      state = _React$useState[0],
      setState = _React$useState[1];

  function set(newState) {
    setState(_extends({}, state, {}, newState));
  }

  return [state, set];
}

function usePrevious(value) {
  var ref = React.useRef();
  React.useEffect(function () {
    ref.current = value;
  });
  return ref.current;
}

function usePassiveState(fromValue, _ref) {
  var defaultValue = _ref.defaultValue,
      delay = _ref.delay,
      activation = _ref.activation;

  var _React$useState = React.useState(defaultValue),
      value = _React$useState[0],
      setValue = _React$useState[1];

  var _React$useState2 = React.useState(false),
      passing = _React$useState2[0],
      setPassing = _React$useState2[1];

  React.useEffect(function () {
    // ignore deactive changes
    if (!activation) {
      return;
    }

    setPassing(true);
    var timeout = setTimeout(function () {
      return setValue(fromValue) | setPassing(false);
    }, delay);
    return function () {
      return clearTimeout(timeout);
    };
  }, [fromValue, activation]);
  return [value, passing, setValue];
}

var Button =
/*#__PURE__*/
React.forwardRef(function (_ref, ref) {
  var onPress = _ref.onPress,
      style = _ref.style,
      type = _ref.type,
      children = _ref.children;
  return React.createElement("button", {
    ref: ref,
    onClick: onPress,
    style: _extends({
      cursor: 'pointer',
      boxSizing: 'border-box',
      border: 'none',
      boxShadow: 'none'
    }, style),
    type: type
  }, children);
});

var CopyToClipboard =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(CopyToClipboard, _React$PureComponent);

  function CopyToClipboard() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$PureComponent.call.apply(_React$PureComponent, [this].concat(args)) || this;

    _this.onClick = function (event) {
      var _this$props = _this.props,
          text = _this$props.text,
          onCopy = _this$props.onCopy,
          children = _this$props.children,
          options = _this$props.options;
      var elem = React.Children.only(children);
      var result = copy(text, options);

      if (onCopy) {
        onCopy(text, result);
      } // Bypass onClick if it was present


      if (elem && elem.props && typeof elem.props.onClick === 'function') {
        elem.props.onClick(event);
      }
    };

    return _this;
  }

  var _proto = CopyToClipboard.prototype;

  _proto.render = function render() {
    var _this$props2 = this.props,
        _text = _this$props2.text,
        _onCopy = _this$props2.onCopy,
        _options = _this$props2.options,
        children = _this$props2.children,
        props = _objectWithoutPropertiesLoose(_this$props2, ["text", "onCopy", "options", "children"]);

    var elem = React.Children.only(children);
    return React.cloneElement(elem, _extends({}, props, {
      onClick: this.onClick
    }));
  };

  return CopyToClipboard;
}(React.PureComponent);

CopyToClipboard.defaultProps = {
  onCopy: undefined,
  options: undefined
};

/** import 'react-image-crop/lib/ReactCrop.scss'; **/

var Style = function Style() {
  return React.createElement("style", null, "\n.ReactCrop {\n    position: relative;\n    display: inline-block;\n    cursor: crosshair;\n    overflow: hidden;\n    max-width: 100%;\n    background-color: #000; }\n.ReactCrop:focus {\n    outline: none; }\n.ReactCrop--disabled, .ReactCrop--locked {\n    cursor: inherit; }\n.ReactCrop__image {\n    display: block;\n    max-width: 100%;\n    touch-action: manipulation; }\n.ReactCrop--crop-invisible .ReactCrop__image {\n    opacity: 0.5; }\n.ReactCrop__crop-selection {\n    position: absolute;\n    top: 0;\n    left: 0;\n    transform: translate3d(0, 0, 0);\n    box-sizing: border-box;\n    cursor: move;\n    box-shadow: 0 0 0 9999em rgba(0, 0, 0, 0.5);\n    touch-action: manipulation;\n    border: 1px solid;\n    border-image-source: url(\"data:image/gif;base64,R0lGODlhCgAKAJECAAAAAP///////wAAACH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OEI5RDc5MTFDNkE2MTFFM0JCMDZEODI2QTI4MzJBOTIiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OEI5RDc5MTBDNkE2MTFFM0JCMDZEODI2QTI4MzJBOTIiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuZGlkOjAyODAxMTc0MDcyMDY4MTE4MDgzQzNDMjA5MzREQ0ZDIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjAyODAxMTc0MDcyMDY4MTE4MDgzQzNDMjA5MzREQ0ZDIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Af/+/fz7+vn49/b19PPy8fDv7u3s6+rp6Ofm5eTj4uHg397d3Nva2djX1tXU09LR0M/OzczLysnIx8bFxMPCwcC/vr28u7q5uLe2tbSzsrGwr66trKuqqainpqWko6KhoJ+enZybmpmYl5aVlJOSkZCPjo2Mi4qJiIeGhYSDgoGAf359fHt6eXh3dnV0c3JxcG9ubWxramloZ2ZlZGNiYWBfXl1cW1pZWFdWVVRTUlFQT05NTEtKSUhHRkVEQ0JBQD8+PTw7Ojk4NzY1NDMyMTAvLi0sKyopKCcmJSQjIiEgHx4dHBsaGRgXFhUUExIREA8ODQwLCgkIBwYFBAMCAQAAIfkEBQoAAgAsAAAAAAoACgAAAhWEERkn7W3ei7KlagMWF/dKgYeyGAUAIfkEBQoAAgAsAAAAAAoACgAAAg+UYwLJ7RnQm7QmsCyVKhUAIfkEBQoAAgAsAAAAAAoACgAAAhCUYgLJHdiinNSAVfOEKoUCACH5BAUKAAIALAAAAAAKAAoAAAIRVISAdusPo3RAzYtjaMIaUQAAIfkEBQoAAgAsAAAAAAoACgAAAg+MDiem7Q8bSLFaG5il6xQAIfkEBQoAAgAsAAAAAAoACgAAAg+UYRLJ7QnQm7SmsCyVKhUAIfkEBQoAAgAsAAAAAAoACgAAAhCUYBLJDdiinNSEVfOEKoECACH5BAUKAAIALAAAAAAKAAoAAAIRFISBdusPo3RBzYsjaMIaUQAAOw==\");\n    border-image-slice: 1;\n    border-image-repeat: repeat; }\n    .ReactCrop--disabled .ReactCrop__crop-selection {\n    cursor: inherit; }\n    .ReactCrop--circular-crop .ReactCrop__crop-selection {\n    border-radius: 50%;\n    box-shadow: 0px 0px 1px 1px white, 0 0 0 9999em rgba(0, 0, 0, 0.5); }\n.ReactCrop__rule-of-thirds-vt::before, .ReactCrop__rule-of-thirds-vt::after, .ReactCrop__rule-of-thirds-hz::before, .ReactCrop__rule-of-thirds-hz::after {\n    content: '';\n    display: block;\n    position: absolute;\n    background-color: rgba(255, 255, 255, 0.9); }\n.ReactCrop__rule-of-thirds-vt::before, .ReactCrop__rule-of-thirds-vt::after {\n    width: 1px;\n    height: 100%; }\n.ReactCrop__rule-of-thirds-vt::before {\n    left: 33.3333%;\n    left: calc(100% / 3); }\n.ReactCrop__rule-of-thirds-vt::after {\n    left: 66.6666%;\n    left: calc(100% / 3 * 2); }\n.ReactCrop__rule-of-thirds-hz::before, .ReactCrop__rule-of-thirds-hz::after {\n    width: 100%;\n    height: 1px; }\n.ReactCrop__rule-of-thirds-hz::before {\n    top: 33.3333%;\n    top: calc(100% / 3); }\n.ReactCrop__rule-of-thirds-hz::after {\n    top: 66.6666%;\n    top: calc(100% / 3 * 2); }\n.ReactCrop__drag-handle {\n    position: absolute;\n    width: 10px;\n    height: 10px;\n    background-color: rgba(0, 0, 0, 0.2);\n    border: 1px solid rgba(255, 255, 255, 0.7);\n    box-sizing: border-box;\n    outline: 1px solid transparent; }\n.ReactCrop .ord-nw {\n    top: 0;\n    left: 0;\n    margin-top: -5px;\n    margin-left: -5px;\n    cursor: nw-resize; }\n.ReactCrop .ord-n {\n    top: 0;\n    left: 50%;\n    margin-top: -5px;\n    margin-left: -5px;\n    cursor: n-resize; }\n.ReactCrop .ord-ne {\n    top: 0;\n    right: 0;\n    margin-top: -5px;\n    margin-right: -5px;\n    cursor: ne-resize; }\n.ReactCrop .ord-e {\n    top: 50%;\n    right: 0;\n    margin-top: -5px;\n    margin-right: -5px;\n    cursor: e-resize; }\n.ReactCrop .ord-se {\n    bottom: 0;\n    right: 0;\n    margin-bottom: -5px;\n    margin-right: -5px;\n    cursor: se-resize; }\n.ReactCrop .ord-s {\n    bottom: 0;\n    left: 50%;\n    margin-bottom: -5px;\n    margin-left: -5px;\n    cursor: s-resize; }\n.ReactCrop .ord-sw {\n    bottom: 0;\n    left: 0;\n    margin-bottom: -5px;\n    margin-left: -5px;\n    cursor: sw-resize; }\n.ReactCrop .ord-w {\n    top: 50%;\n    left: 0;\n    margin-top: -5px;\n    margin-left: -5px;\n    cursor: w-resize; }\n.ReactCrop__disabled .ReactCrop__drag-handle {\n    cursor: inherit; }\n.ReactCrop__drag-bar {\n    position: absolute; }\n    .ReactCrop__drag-bar.ord-n {\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 6px;\n    margin-top: -3px; }\n    .ReactCrop__drag-bar.ord-e {\n    right: 0;\n    top: 0;\n    width: 6px;\n    height: 100%;\n    margin-right: -3px; }\n    .ReactCrop__drag-bar.ord-s {\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    height: 6px;\n    margin-bottom: -3px; }\n    .ReactCrop__drag-bar.ord-w {\n    top: 0;\n    left: 0;\n    width: 6px;\n    height: 100%;\n    margin-left: -3px; }\n.ReactCrop--new-crop .ReactCrop__drag-bar,\n.ReactCrop--new-crop .ReactCrop__drag-handle,\n.ReactCrop--fixed-aspect .ReactCrop__drag-bar {\n    display: none; }\n.ReactCrop--fixed-aspect .ReactCrop__drag-handle.ord-n,\n.ReactCrop--fixed-aspect .ReactCrop__drag-handle.ord-e,\n.ReactCrop--fixed-aspect .ReactCrop__drag-handle.ord-s,\n.ReactCrop--fixed-aspect .ReactCrop__drag-handle.ord-w {\n    display: none; }\n@media (pointer: coarse) {\n    .ReactCrop__drag-handle {\n    width: 20px;\n    height: 20px; }\n    .ReactCrop .ord-nw {\n    margin-top: -10px;\n    margin-left: -10px; }\n    .ReactCrop .ord-n {\n    margin-top: -10px;\n    margin-left: -10px; }\n    .ReactCrop .ord-ne {\n    margin-top: -10px;\n    margin-right: -10px; }\n    .ReactCrop .ord-e {\n    margin-top: -10px;\n    margin-right: -10px; }\n    .ReactCrop .ord-se {\n    margin-bottom: -10px;\n    margin-right: -10px; }\n    .ReactCrop .ord-s {\n    margin-bottom: -10px;\n    margin-left: -10px; }\n    .ReactCrop .ord-sw {\n    margin-bottom: -10px;\n    margin-left: -10px; }\n    .ReactCrop .ord-w {\n    margin-top: -10px;\n    margin-left: -10px; }\n    .ReactCrop__drag-bar.ord-n {\n    height: 16px;\n    margin-top: -8px; }\n    .ReactCrop__drag-bar.ord-e {\n    width: 16px;\n    margin-right: -8px; }\n    .ReactCrop__drag-bar.ord-s {\n    height: 16px;\n    margin-bottom: -8px; }\n    .ReactCrop__drag-bar.ord-w {\n    width: 16px;\n    margin-left: -8px; } }\n");
};

function CropField(props) {
  return React.createElement(React.Fragment, null, React.createElement(Style, null), React.createElement("style", null, "\n                .ReactCrop__crop-selection {\n                    border-radius: 50%;\n                }\n                "), React.createElement(ReactCrop, {
    src: props.dataUrl,
    crop: props.crop,
    keepSelection: true,
    minHeight: props.minHeight,
    onImageLoaded: function onImageLoaded(image) {
      return props.setImage(image);
    },
    onChange: function onChange(crop) {
      return props.setCrop(crop);
    }
  }));
}

var drawer = {
  /**
   * @param {HTMLImageElement} image - Image File Object
   * @param {Object} crop - crop Object
   * @param {String} fileName - Name of the returned file in Promise
   */
  getCroppedImg: function getCroppedImg(image, crop, fileName) {
    var canvas = document.createElement('canvas');
    var scaleX = image.naturalWidth / image.width;
    var scaleY = image.naturalHeight / image.height;
    canvas.width = crop.width;
    canvas.height = crop.height;
    var ctx = canvas.getContext('2d');
    ctx.drawImage(image, crop.x * scaleX, crop.y * scaleY, crop.width * scaleX, crop.height * scaleY, 0, 0, crop.width, crop.height); // As Base64 string
    // const base64Image = canvas.toDataURL('image/jpeg');
    // As a blob

    return new Promise(function (resolve, reject) {
      canvas.toBlob(function (blob) {
        blob.name = fileName;
        resolve(blob);
      }, 'image/jpeg', 1);
    });
  }
};

function useActive(ref) {
  var _React$useState = React.useState(false),
      value = _React$useState[0],
      setValue = _React$useState[1];

  var h1 = function h1() {
    return setValue(true);
  };

  var h2 = function h2() {
    return setValue(false);
  };

  React.useEffect(function () {
    var node = ref.current;

    if (!node) {
      return;
    }

    node.addEventListener('activate', h1);
    node.addEventListener('deactivate', h2);
    return function () {
      node.removeEventListener('activate', h1);
      node.removeEventListener('deactivate', h2);
    };
  }, [ref.current]);
  return value;
}

function getDimensions() {
  var w = window,
      d = document,
      documentElement = d.documentElement,
      body = d.getElementsByTagName('body')[0],
      width = w.innerWidth || documentElement.clientWidth || body.clientWidth,
      height = w.innerHeight || documentElement.clientHeight || body.clientHeight;
  return {
    width: width,
    height: height
  };
}

function useDimensions() {
  var initial = {
    width: null,
    height: null
  };

  if (typeof window !== 'undefined') {
    initial = getDimensions();
  }

  var _React$useState = React.useState(initial),
      dimensions = _React$useState[0],
      setDimensions = _React$useState[1];

  React.useEffect(function () {
    var updateDimensions = function updateDimensions() {
      return setDimensions(getDimensions());
    };

    window.addEventListener('resize', updateDimensions);
    return function () {
      return window.removeEventListener('resize', updateDimensions);
    };
  }, []);
  return dimensions;
}

function useFocus(ref) {
  var _React$useState = React.useState(false),
      value = _React$useState[0],
      setValue = _React$useState[1];

  var h1 = function h1() {
    return setValue(true);
  };

  var h2 = function h2() {
    return setValue(false);
  };

  React.useEffect(function () {
    var node = ref.current;

    if (!node) {
      return;
    }

    node.addEventListener('focus', h1);
    node.addEventListener('blur', h2);
    return function () {
      node.removeEventListener('focus', h1);
      node.removeEventListener('blur', h2);
    };
  }, [ref.current]);
  return value;
}

function useHover(ref) {
  var _React$useState = React.useState(false),
      value = _React$useState[0],
      setValue = _React$useState[1];

  var handleMouseOver = function handleMouseOver() {
    return setValue(true);
  };

  var handleMouseOut = function handleMouseOut() {
    return setValue(false);
  };

  React.useEffect(function () {
    var node = ref.current;

    if (!node) {
      return;
    }

    node.addEventListener('mouseover', handleMouseOver);
    node.addEventListener('mouseout', handleMouseOut);
    return function () {
      node.removeEventListener('mouseover', handleMouseOver);
      node.removeEventListener('mouseout', handleMouseOut);
    };
  }, [ref.current]);
  return value;
}

//     React.useEffect(
//         () => {
//             const node = ref.current;
//             if (!node) {
//                 return;
//             }
//             node.addEventListener(eventName, handler);
//             return () => node.removeEventListener(eventName, handler);
//         },
//         [ref.current],
//     );
//     return null;
// }

function defaultFilter() {
  return true;
}

function useEvent(ref, eventName, options, filter) {
  if (filter === void 0) {
    filter = defaultFilter;
  }

  var _React$useState = React.useState(null),
      event = _React$useState[0],
      setEvent = _React$useState[1];

  React.useEffect(function () {
    // this effect should be SSR safe
    if (!ref) return; // handler function

    var handler = function handler(event) {
      return filter(event) ? setEvent(event) : null;
    }; // bind and unbind event


    ref.addEventListener(eventName, handler, options);
    return function () {
      return ref.removeEventListener(eventName, handler);
    };
  }, [eventName]);
  return event;
}

var FilePicker =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(FilePicker, _React$PureComponent);

  function FilePicker() {
    return _React$PureComponent.apply(this, arguments) || this;
  }

  var _proto = FilePicker.prototype;

  _proto.render = function render() {
    var _this = this;

    var _this$props = this.props,
        children = _this$props.children,
        multiple = _this$props.multiple;
    return React.createElement(React.Fragment, null, React.createElement("input", {
      multiple: multiple,
      type: 'file',
      ref: function ref(_ref) {
        _this.inputRef = _ref;
      },
      hidden: true,
      onChange: function onChange(e) {
        var files = e.target.files;

        _this._onPick(Array.from(files));

        e.target.value = '';
      }
    }), children(function (onPick) {
      _this._onPick = onPick;

      _this.inputRef.click();
    }));
  };

  return FilePicker;
}(React.PureComponent);

var FontContext =
/*#__PURE__*/
React.createContext({
  fontFamily: undefined,
  fontSize: undefined,
  fontWeight: undefined,
  color: undefined,
  lineHeight: undefined
});

function FontProvider(_ref) {
  var value = _ref.value,
      children = _ref.children;
  var ctx = React.useContext(FontContext);
  return React.createElement(FontContext.Provider, {
    value: _extends({}, ctx, {}, value)
  }, children);
}

function Form(_ref) {
  var onSubmit = _ref.onSubmit,
      children = _ref.children;

  function onSubmitFn(e) {
    e.preventDefault();
    onSubmit && onSubmit();
  }

  return React.createElement("form", {
    onSubmit: onSubmitFn
  }, children);
}

var PageTitle =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(PageTitle, _React$Component);

  function PageTitle() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = PageTitle.prototype;

  _proto.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
    return nextProps.title !== this.props.title || nextProps.meta !== this.props.meta;
  };

  _proto.render = function render() {
    var props = this.props;
    var array = [];

    for (var name in props.meta || {}) {
      array.push([name, props.meta[name]]);
    }

    return React.createElement(Head, null, React.createElement("title", null, props.title), array.map(function (_ref) {
      var name = _ref[0],
          content = _ref[1];
      return React.createElement("meta", {
        key: name,
        name: name,
        content: content
      });
    }), props.authorURL && React.createElement("link", {
      rel: "author",
      href: props.authorURL
    }));
  };

  return PageTitle;
}(React.Component);

function useFileReader(from, readAs) {
  if (readAs === void 0) {
    readAs = 'readAsDataURL';
  }

  // data: contains loaded image url
  var _React$useState = React.useState(false),
      data = _React$useState[0],
      setData = _React$useState[1]; // on url prop changed


  React.useEffect(function () {
    // reset
    setData(false); // prevent invalid url

    if (!from) return; // allow access to loaded url.

    var onLoad = function onLoad(event) {
      return setData(event.target.result);
    }; // try to load image in background


    var reader = new FileReader();
    reader.addEventListener('load', onLoad);
    reader[readAs](from); // prevent old url loaded to be set as current.

    return function () {
      return reader.removeEventListener('load', onLoad);
    };
  }, [from, readAs]); // pass url prop when was loaded

  return data;
}
useFileReader.AS_ARRAY_BUFFER = 'readAsArrayBuffer';
useFileReader.AS_BINARY_STRING = 'readAsBinaryString';
useFileReader.AS_DATA_URL = 'readAsDataURL';
useFileReader.AS_TEXT = 'readAsText';

var loaded = {};

function alreadyLoaded(from) {
  return from && loaded[from];
}

function useImageLoader(from) {
  var defaultData = alreadyLoaded(from) ? from : false; // data: contains loaded image url

  var _React$useState = React.useState(defaultData),
      data = _React$useState[0],
      setData = _React$useState[1]; // on url prop changed


  React.useEffect(function () {
    if (alreadyLoaded(from)) {
      return setData(from);
    } // reset


    setData(false); // prevent invalid url

    if (!from) return; // allow access to loaded url.

    var onLoad = function onLoad() {
      loaded[from] = from;
      setData(from);
    }; // try to load image in background


    var img = new Image();
    img.src = from;
    img.addEventListener('load', onLoad); // prevent old url loaded to be set as current.

    return function () {
      return img.removeEventListener('load', onLoad);
    };
  }, [from]); // pass url prop when was loaded

  return data;
}

function useLoader(from) {
  var isUrl = !from || typeof from === 'string' || from instanceof String;
  var url = useImageLoader(isUrl ? from : false);
  var file = useFileReader(!isUrl ? from : false);
  return isUrl ? url : file;
}

var Theme =
/*#__PURE__*/
React.createContext({
  placeholderViewColor: '#bbb',
  placeholderTextColor: '#aaa'
});

function PlaceholderView(_ref) {
  var style = _ref.style;
  var themeCtx = React.useContext(Theme);
  return React.createElement(View$1, {
    style: _extends({}, style, {
      backgroundColor: themeCtx.placeholderViewColor
    })
  });
}
PlaceholderView.defaultProps = {
  style: {}
};

var Fade =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Fade, _React$Component);

  function Fade(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.state = {
      current: props.index,
      opacity: 0
    };
    return _this;
  }

  var _proto = Fade.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        items = _this$props.items,
        style = _this$props.style,
        index = _this$props.index;
    var s = {
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
      width: '100%',
      height: '100%',
      transition: 'opacity ' + this.props.duration + 's'
    };
    var Current = items[this.state.current];
    var Next = items[index];
    return React.createElement("div", {
      style: _extends({}, style, {
        position: 'relative',
        overflow: 'hidden'
      })
    }, React.createElement(Current, {
      style: _extends({}, s)
    }), index !== this.state.current ? React.createElement(Next, {
      style: _extends({}, s, {
        opacity: this.state.opacity
      })
    }) : null);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState, snapshot) {
    var _this2 = this;

    // on index prop change
    if (prevProps.index !== this.props.index) {
      clearTimeout(this.t1);
      clearTimeout(this.t2);
      this.t1 = setTimeout(function (e) {
        _this2.setState({
          opacity: 1
        });

        _this2.t2 = setTimeout(function (e) {
          _this2.setState({
            current: _this2.props.index,
            opacity: 0
          });
        }, _this2.props.duration * 1000);
      }, 10);
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    clearTimeout(this.t1);
    clearTimeout(this.t2);
  };

  return Fade;
}(React.Component);

Fade.defaultProps = {
  duration: .3
};

var Img = function Img(props) {
  // const [state, setState] = useLegacyState({
  //     index: props.src ? 1 : 0,
  //     prev: props.src,
  //     current: props.src,
  // });
  // const prevSrc = usePrevious(props.src);
  // React.useEffect(() => {
  //     let src = props.src;
  //     // console.log('componentWillUpdate', prevSrc + ' -> ' + src);
  //     // on src prop change
  //     if (src !== prevSrc) {
  //         // image -> placeholder
  //         if (!src) {
  //             // console.log('i -> p');
  //             return setState({
  //                 index: 0,
  //             });
  //         }
  //         // placeholder -> image
  //         if (!prevSrc) {
  //             // console.log('p -> i');
  //             return setState({
  //                 index: 1,
  //                 prev: src,
  //             });
  //         }
  //         // console.log('i -> i');
  //         // image -> image
  //         return setState({
  //             index: state.index === 1 ? 2 : 1,
  //             prev: state.index === 1 ? prevSrc : src,
  //             current: state.index === 1 ? src : prevSrc,
  //         });
  //     }
  // }, [props.src]);
  if (props.src) {
    return React.createElement("img", {
      src: props.src,
      style: _extends({}, props.style, {
        objectFit: props.resizeMode,
        objectPosition: 'center center'
      })
    });
  }

  var Placeholder = props.placeholder;
  return React.createElement(Placeholder, {
    style: props.style
  }); // return (
  //     <Fade
  //         duration={1}
  //         index={state.index}
  //         style={props.style}
  //         items={[
  //             ({style}) => {
  //                 let Placeholder = props.placeholder;
  //                 return (
  //                     <Placeholder
  //                         style={style}
  //                     />
  //                 );
  //             },
  //             ({style}) => (
  //                 <img
  //                     src={state.prev ? state.prev : undefined}
  //                     style={{
  //                         ...style,
  //                         objectFit: props.resizeMode,
  //                         objectPosition: 'center center',
  //                     }}
  //                 />
  //             ),
  //             ({style}) => (
  //                 <img
  //                     src={state.current ? state.current : undefined}
  //                     style={{
  //                         ...style,
  //                         objectFit: props.resizeMode,
  //                         objectPosition: 'center center',
  //                     }}
  //                 />
  //             ),
  //         ]}
  //     />
  // );
};

function Image$1(_ref) {
  var source = _ref.source,
      placeholder = _ref.placeholder,
      resizeMode = _ref.resizeMode,
      style = _ref.style;
  var src = useLoader(source);
  return React.createElement(Img, {
    src: src,
    placeholder: placeholder,
    resizeMode: resizeMode,
    style: style
  });
}
Image$1.defaultProps = {
  style: {},
  placeholder: function placeholder(_ref2) {
    var style = _ref2.style;
    return React.createElement(PlaceholderView, {
      style: style
    });
  }
};

function ImageZoom(_ref) {
  var source = _ref.source,
      alt = _ref.alt,
      zoomSource = _ref.zoomSource,
      zoomAlt = _ref.zoomAlt,
      style = _ref.style;
  return React.createElement(IM, {
    image: {
      src: source,
      alt: alt
    },
    zoomImage: {
      src: zoomSource,
      alt: zoomAlt
    },
    style: style
  });
}

var Input =
/*#__PURE__*/
React.forwardRef(function (_ref, ref) {
  var value = _ref.value,
      onValue = _ref.onValue,
      placeholder = _ref.placeholder,
      keyboard = _ref.keyboard,
      autoComplete = _ref.autoComplete,
      autoFocus = _ref.autoFocus,
      style = _ref.style,
      multiLine = _ref.multiLine,
      minLines = _ref.minLines,
      disabled = _ref.disabled,
      onFocus = _ref.onFocus;
  var fontCtx = React.useContext(FontContext);

  if (multiLine) {
    return React.createElement("div", {
      style: {
        display: 'flex'
      }
    }, React.createElement(TextArea, {
      useCacheForDOMMeasurements: true,
      value: value,
      placeholder: placeholder,
      disabled: disabled,
      onFocus: onFocus,
      onChange: function onChange(e) {
        onValue && onValue(e.target.value);
      },
      minRows: minLines,
      style: _extends({
        fontFamily: fontCtx.fontFamily,
        fontSize: fontCtx.fontSize,
        fontWeight: fontCtx.fontWeight,
        color: fontCtx.color,
        lineHeight: fontCtx.lineHeight,
        resize: 'none',
        // To prevent TextArea show horizontal zero scroll pan when is not focused.
        overflowX: 'hidden',
        width: '100%',
        border: 'none',
        outline: 'none'
      }, style)
    }));
  }

  return React.createElement("input", {
    ref: ref,
    autoComplete: autoComplete,
    autoFocus: autoFocus,
    type: keyboard,
    value: value,
    onChange: function onChange(e) {
      onValue && onValue(e.target.value);
    },
    placeholder: placeholder,
    style: _extends({
      fontFamily: fontCtx.fontFamily,
      fontSize: fontCtx.fontSize,
      fontWeight: fontCtx.fontWeight,
      color: fontCtx.color,
      lineHeight: fontCtx.lineHeight,
      outline: 'none',
      boxSizing: 'border-box'
    }, style),
    formNoValidate: true
  });
});
Input.Keyboard = {
  TEXT: 'text',
  NUMBER: 'number',
  TEL: 'tel',
  EMAIL: 'email'
};
Input.defaultProps = {
  keyboard: Input.Keyboard.TEXT,
  style: {},
  autoComplete: 'off'
};

function useRouter() {
  var router = useRouter$1();
  return {
    getPathname: function getPathname() {
      return router.route;
    },
    getQuery: function getQuery(name, defaultValue) {
      if (router.query[name] === undefined) {
        return defaultValue;
      }

      return router.query[name];
    },
    events: router.events,
    push: router.push,
    replace: router.replace,
    back: router.back
  };
}

function Link(_ref) {
  var href = _ref.href,
      as = _ref.as,
      onClick = _ref.onClick,
      style = _ref.style,
      children = _ref.children;
  return React.createElement(L, {
    href: href,
    as: as
  }, React.createElement("a", {
    onClick: onClick,
    style: style
  }, children));
}

var Style$1 = function Style() {
  return React.createElement("style", null, "\n.h-list {\n    display: flex;\n    height: 100%;\n    overflow-x: scroll;\n}\n\n.h-list > div {\n    height: 100%;\n}\n\n@media (min-width: 768px) {\n    .h-list {\n        overflow-x: hidden;\n    }\n    .h-list > div {\n        flex-grow: 1;\n    }\n}\n");
};

var HList =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(HList, _React$Component);

  function HList() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = HList.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        title = _this$props.title,
        items = _this$props.items,
        itemRenderer = _this$props.itemRenderer;
    return React.createElement("div", null, React.createElement(Style$1, null), React.createElement("div", null, React.createElement("h3", null, title), React.createElement("div", {
      className: 'h-list'
    }, items.map(function (item, i) {
      return React.createElement("div", {
        key: i
      }, itemRenderer(item));
    }))));
  };

  return HList;
}(React.Component);

var InfiniteList = function InfiniteList(_ref) {
  var items = _ref.items,
      isNextPageLoading = _ref.isNextPageLoading,
      hasNextPage = _ref.hasNextPage,
      renderItem = _ref.renderItem,
      loadMoreItems = _ref.loadMoreItems,
      setListRef = _ref.setListRef,
      outerRef = _ref.outerRef,
      innerRef = _ref.innerRef;
  var RefForwarder = React.forwardRef(function (_ref2, ref) {
    var style = _ref2.style,
        index = _ref2.index;
    return React.createElement("div", {
      ref: ref,
      style: style
    }, renderItem(items[index], index));
  });
  return React.createElement(AutoSizer, null, function (_ref3) {
    var height = _ref3.height,
        width = _ref3.width;
    return React.createElement(InfiniteLoader, {
      isItemLoaded: function isItemLoaded(index) {
        return !hasNextPage || index < items.length;
      },
      itemCount: hasNextPage ? items.length + 1 : items.length,
      loadMoreItems: !isNextPageLoading ? loadMoreItems : function () {}
    }, function (_ref4) {
      var onItemsRendered = _ref4.onItemsRendered,
          _ref5 = _ref4.ref;
      return React.createElement(DynamicSizeList, {
        ref: function ref(el) {
          _ref5(el);

          setListRef && setListRef(el);
        },
        onItemsRendered: onItemsRendered,
        width: width,
        height: height,
        itemCount: items.length,
        outerRef: outerRef,
        innerRef: innerRef
      }, RefForwarder);
    });
  });
};

var List = /*#__PURE__*/
React.forwardRef(function List(_ref, ref) {
  var items = _ref.items,
      keyExtractor = _ref.keyExtractor,
      topper = _ref.topper,
      _loadMoreItems = _ref.loadMoreItems,
      _renderItem = _ref.renderItem,
      getItemHeight = _ref.getItemHeight,
      outerRef = _ref.outerRef,
      innerRef = _ref.innerRef;
  var noItem = !items || !items.length;
  var onlyTopper = noItem && topper;
  return React.createElement(View$1, {
    style: {
      height: '100%',
      direction: 'ltr'
    }
  }, React.createElement(InfiniteList, {
    setListRef: function setListRef(r) {
      if (ref) {
        ref.current = r;
      }
    },
    items: onlyTopper ? [1] : items,
    isNextPageLoading: false,
    hasNextPage: onlyTopper ? false : items.length < 1000,
    loadMoreItems: function loadMoreItems(startIndex, stopIndex) {
      // console.log('loadMoreItems', {startIndex, stopIndex});
      if (onlyTopper) {
        return null;
      }

      _loadMoreItems(10);
    },
    renderItem: function renderItem(item, index) {
      return React.createElement(View$1, {
        style: {
          direction: 'rtl'
        }
      }, index === 0 && topper ? topper : null, onlyTopper ? null : _renderItem(item, index));
    },
    outerRef: outerRef,
    innerRef: innerRef
  }));
});

function ListReversed(_ref) {
  var _renderItem = _ref.renderItem,
      props = _objectWithoutPropertiesLoose(_ref, ["renderItem"]);

  var ref = React.useRef(null);
  var refOut = React.useRef(null);

  function mouseWeel(e) {
    e.preventDefault(); // TODO make it smoother

    refOut.current.scrollTop += -e.deltaY;
  }

  React.useEffect(function () {
    document.addEventListener('mousewheel', mouseWeel, {
      passive: false
    });
    return function () {
      return document.removeEventListener('mousewheel', mouseWeel);
    };
  }, []);
  return React.createElement(View$1, {
    style: {
      height: '100%',
      transform: 'scaleY(-1)'
    }
  }, React.createElement(List, _extends({
    outerRef: refOut,
    ref: ref
  }, props, {
    renderItem: function renderItem(item, index) {
      return React.createElement("div", {
        style: {
          transform: 'scaleY(-1)'
        }
      }, _renderItem(item, index));
    }
  })));
}

function useMounted() {
  var _React$useState = React.useState(false),
      mounted = _React$useState[0],
      setMounted = _React$useState[1]; // on mount


  React.useEffect(function () {
    return setMounted(true);
  }, []);
  return mounted;
}

function Modal(_ref) {
  var modalState = _ref.modalState,
      nonClosable = _ref.nonClosable,
      children = _ref.children,
      color = _ref.color;
  var mounted = useMounted();

  var _React$useState2 = React.useState(false),
      showing = _React$useState2[0],
      setShowing = _React$useState2[1];

  var _React$useState3 = React.useState(false),
      showingClassName = _React$useState3[0],
      setShowingClassName = _React$useState3[1]; // showing: following show


  React.useEffect(function () {
    if (modalState.showing) {
      setShowing(true);
    } else {
      setShowingClassName(false);
      var timeout = setTimeout(function () {
        return setShowing(false);
      }, 300);
      return function () {
        return clearTimeout(timeout);
      };
    }
  }, [modalState.showing]); // on state show change

  React.useEffect(function () {
    if (showing) {
      var timeout = setTimeout(function () {
        return setShowingClassName(true);
      }, 20);
      return function () {
        return clearTimeout(timeout);
      };
    }
  }, [showing]);

  if (typeof window === 'undefined') {
    return null;
  }

  var modalRoot = document.getElementById('modal-root');

  if (!modalRoot || !mounted || !showing) {
    return null;
  }

  var inside = React.createElement("div", {
    style: {
      position: 'fixed',
      bottom: 0,
      top: 0,
      right: 0,
      left: 0,
      background: showingClassName ? color : 'transparent',
      opacity: showingClassName ? 1 : 0,
      zIndex: 99999,
      transition: 'all .3s'
    },
    onClick: function onClick() {
      return !nonClosable && modalState.close();
    }
  }, children);
  return ReactDOM.createPortal(inside, modalRoot);
}
Modal.defaultProps = {
  color: 'rgba(0, 0, 0, 0.5)'
};

Modal.Container = function Container(_ref2) {
  var children = _ref2.children;
  return React.createElement(React.Fragment, null, children, React.createElement("div", {
    id: 'modal-root'
  }));
};

function ModalDialog(_ref) {
  var children = _ref.children;
  return React.createElement("div", {
    style: {
      width: '100%',
      height: '100%'
    },
    onClick: function onClick(e) {
      return e.stopPropagation();
    },
    children: children
  });
}

function usePlatform() {
  return {
    os: null,
    version: null
  };
}

var ScrollView =
/*#__PURE__*/
React.forwardRef(function (_ref, ref) {
  var _extends2;

  var style = _ref.style,
      horizontal = _ref.horizontal,
      props = _objectWithoutPropertiesLoose(_ref, ["style", "horizontal"]);

  style = _extends({
    width: '100%',
    height: '100%'
  }, style, (_extends2 = {}, _extends2[horizontal ? 'overflowX' : 'overflowY'] = 'scroll', _extends2));
  return React.createElement("div", _extends({
    ref: ref,
    style: style
  }, props));
});
ScrollView.defaultProps = {
  style: {}
};

function NoUserSelect(_ref) {
  var children = _ref.children,
      style = _ref.style,
      props = _objectWithoutPropertiesLoose(_ref, ["children", "style"]);

  return React.createElement("div", _extends({}, props, {
    style: _extends({
      userSelect: 'none'
    }, style)
  }), children);
}
NoUserSelect.defaultProps = {
  style: {}
};

var SidebarContext =
/*#__PURE__*/
React.createContext(0);

function Sidebar(_ref) {
  var open = _ref.open,
      rtl = _ref.rtl,
      side = _ref.side,
      width = _ref.width,
      behavior = _ref.behavior,
      children = _ref.children;
  var contentDistance = useTransition({
    duration: .3,
    input: open,
    output: [width, 0]
  });
  var sideDistance = useTransition({
    duration: .3,
    input: open,
    output: [0, -width]
  });
  return React.createElement(SidebarContext.Provider, {
    value: width
  }, React.createElement(View$1, {
    style: {
      height: '100%'
    }
  }, React.createElement(View$1, {
    style: {
      height: '100%'
    },
    animation: _extends({}, rtl ? {
      marginRight: contentDistance
    } : {
      marginLeft: contentDistance
    })
  }, children), React.createElement(View$1, {
    style: {
      position: 'fixed',
      top: 0,
      bottom: 0,
      height: '100%',
      width: width
    },
    animation: _extends({}, rtl ? {
      right: sideDistance
    } : {
      left: sideDistance
    })
  }, side)));
}

function SidebarSafe(_ref) {
  var style = _ref.style,
      children = _ref.children;
  var ctx = React.useContext(SidebarContext);
  var dimensions = useDimensions$1();
  var minimal = dimensions.width < 768;
  return React.createElement(View$1, {
    style: _extends({
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center'
    }, style)
  }, React.createElement(View$1, {
    style: _extends({
      width: minimal ? '100%' : dimensions.width - ctx
    }, style)
  }, children));
}

var Storage = {
  loadString: function loadString(name) {
    if (typeof window === 'undefined') {
      return null;
    }

    var value = window.localStorage.getItem(name);
    return value ? value : null;
  },
  saveString: function saveString(name, value) {
    if (typeof window === 'undefined') {
      return null;
    }

    return window.localStorage.setItem(name, value);
  },
  loadJSON: function loadJSON(name) {
    var value = Storage.loadString(name);

    if (!value) {
      return null;
    }

    return JSON.parse(value);
  },
  saveJSON: function saveJSON(name, value) {
    return Storage.saveString(name, JSON.stringify(value));
  }
};

function Svg(_ref) {
  var props = _extends({}, _ref);

  return React.createElement("svg", props);
}

Svg.Path = function (_ref2) {
  var props = _extends({}, _ref2);

  return React.createElement("path", props);
};

Svg.G = function (_ref3) {
  var props = _extends({}, _ref3);

  return React.createElement("g", props);
};

Svg.Polygon = function (_ref4) {
  var props = _extends({}, _ref4);

  return React.createElement("polygon", props);
};

var Text = function Text(_ref) {
  var children = _ref.children,
      textRole = _ref.textRole,
      oneLine = _ref.oneLine,
      style = _ref.style;
  var TR = textRole;
  var fontCtx = React.useContext(FontContext);

  if (oneLine) {
    style = _extends({}, style, {
      display: "inline-block",
      width: "100%",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",
      overflow: "hidden"
    });
  }

  return React.createElement(TR, {
    style: _extends({
      fontFamily: fontCtx.fontFamily,
      fontSize: fontCtx.fontSize,
      fontWeight: fontCtx.fontWeight,
      color: fontCtx.color,
      lineHeight: fontCtx.lineHeight,
      display: 'block'
    }, style),
    children: children
  });
};

Text.defaultProps = {
  textRole: 'p',
  style: {}
};

var Touch =
/*#__PURE__*/
React.forwardRef(function (_ref, ref) {
  var onPress = _ref.onPress,
      style = _ref.style,
      children = _ref.children;
  return React.createElement("div", {
    ref: ref,
    onClick: onPress,
    style: style
  }, children);
});

var Video = function Video(_ref) {
  var props = _extends({}, _ref);

  return React.createElement("video", props);
};

function animationStyles(animation) {
  var style = {};
  var transitions = [];

  for (var name in animation) {
    style[name] = animation[name].value;
    transitions.push(animation[name].transition);
  }

  if (transitions) {
    style.transition = transitions.join(',');
  }

  return style;
}

var View =
/*#__PURE__*/
React.forwardRef(function (_ref, ref) {
  var style = _ref.style,
      animation = _ref.animation,
      props = _objectWithoutPropertiesLoose(_ref, ["style", "animation"]);

  if (animation) {
    style = _extends({}, style, {}, animationStyles(animation));
  }

  return React.createElement("div", _extends({
    ref: ref,
    style: style
  }, props));
});
View.defaultProps = {
  style: {}
};

export { Audio, Button, Center, CopyToClipboard, CropField, FilePicker, FontProvider, Form, HList, Image$1 as Image, ImageZoom, Input, Link, List, ListReversed, Modal, ModalDialog, NoUserSelect, PageTitle, ScrollView, Sidebar, SidebarSafe, StatusBar, Storage, Svg, Text, Touch, Video, View, drawer, useActive, useDimensions, useEvent, useFileReader, useFocus, useHover, useLegacyState, usePassiveState, usePlatform, usePrevious, useRouter, useTransition };
