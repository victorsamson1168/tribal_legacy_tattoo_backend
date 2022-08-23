const exp = require("express");
const router = exp.Router();
const Posts = require("../DB/model/PostModel");
const nodemailer = require("nodemailer");

router.post("/", async (req, res) => {
  try {
    const { name, message, email, mobile } = req?.body;

    let transporter = nodemailer.createTransport({
      service: "gmail", // true for 465, false for other ports
      auth: {
        user: "triballegacytattoos@gmail.com", // generated ethereal user
        pass: "qcmpgokfsvwqoofw",
      },
    });

    let mailOptions = {
      from: "triballegacytattoos@gmail.com",
      to: email,
      bcc: "triballegacytattoos@gmail.com",
      subject: "Welcome to Tribal Legacy Tattoo",
      html: `
      <!doctype html>
<html ⚡4email>
   <head>
      <meta charset="utf-8">
      <style amp4email-boilerplate>body{visibility:hidden}</style>
      <script async src="https://cdn.ampproject.org/v0.js"></script>
      <script async custom-element="amp-anim" src="https://cdn.ampproject.org/v0/amp-anim-0.1.js"></script>
   </head>
   <body data-new-gr-c-s-loaded="14.1073.0" style="width:100%;font-family:arial, 'helvetica neue', helvetica, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0">
      <div class="es-wrapper-color" style="background-color:#F7F7F7">
         <!--[if gte mso 9]>
         <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
            <v:fill type="tile" color="#f7f7f7"></v:fill>
         </v:background>
         <![endif]-->
         <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;background-color:#F7F7F7">
            <tr>
               <td valign="top" style="padding:0;Margin:0">
                  <table cellpadding="0" cellspacing="0" class="es-header" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top">
                     <tr>
                        <td align="center" style="padding:0;Margin:0">
                           <table class="es-header-body" align="center" cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px">
                              <tr>
                                 <td align="left" style="padding:20px;Margin:0;border-radius:10px 10px 0px 0px;background-color:#36454F" bgcolor="#36454F">
                                    <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                       <tr>
                                          <td class="es-m-p0r" valign="top" align="center" style="padding:0;Margin:0;width:560px">
                                             <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:separate;border-spacing:0px;border-radius:1px" role="presentation">
                                                <tr>
                                                   <td align="center" style="padding:0;Margin:0;font-size:0px"><img class="adapt-img" src="https://vwlbtp.stripocdn.email/content/guids/6f71fb2d-7123-4996-aa0c-dae8f075d86a/images/logo.png" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="560" height="560"></td>
                                                </tr>
                                             </table>
                                          </td>
                                       </tr>
                                    </table>
                                 </td>
                              </tr>
                           </table>
                        </td>
                     </tr>
                  </table>
                  <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
                     <tr>
                        <td align="center" style="padding:0;Margin:0">
                           <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#ffffff;border-right:1px solid #4c8aa7;border-left:1px solid #4c8aa7;width:600px" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center">
                              <tr>
                                 <td align="left" bgcolor="#ffffff" style="padding:0;Margin:0;padding-left:20px;padding-right:20px;padding-top:30px;background-color:#ffffff">
                                    <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                       <tr>
                                          <td align="left" style="padding:0;Margin:0;width:558px">
                                             <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                <tr>
                                                   <td align="center" class="es-m-txt-c" style="padding:0;Margin:0;padding-bottom:20px;padding-top:30px">
                                                      <h1 style="Margin:0;line-height:36px;mso-line-height-rule:exactly;font-family:georgia, times, 'times new roman', serif;font-size:30px;font-style:normal;font-weight:normal;color:#023047"><b>Thanks for contacting</b><br></h1>
                                                      <h1 style="Margin:0;line-height:36px;mso-line-height-rule:exactly;font-family:georgia, times, 'times new roman', serif;font-size:30px;font-style:normal;font-weight:normal;color:#023047"><b></b>Tribal Legacy Tattoo</h1>
                                                   </td>
                                                </tr>
                                                <tr>
                                                   <td align="center" style="padding:0;Margin:0;padding-right:15px;font-size:0px"><a target="_blank" href="https://viewstripo.email" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#3D7781;font-size:14px"><img class="adapt-img" src="https://vwlbtp.stripocdn.email/content/guids/CABINET_a258b781aab0bd98d6f802cac9b1796c/images/group_128.png" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="370" height="293"></a></td>
                                                </tr>
                                             </table>
                                          </td>
                                       </tr>
                                       <tr>
                                          <td class="es-m-p0r" valign="top" align="center" style="padding:0;Margin:0;width:558px">
                                             <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                <tr>
                                                   <td align="center" class="es-m-txt-c" style="padding:0;Margin:0;padding-bottom:5px;padding-top:30px">
                                                      <h1 style="Margin:0;line-height:36px;mso-line-height-rule:exactly;font-family:georgia, times, 'times new roman', serif;font-size:30px;font-style:normal;font-weight:normal;color:#023047">we'll get back to you shortly</h1>
                                                   </td>
                                                </tr>
                                                <tr>
                                                   <td align="center" style="Margin:0;padding-top:10px;padding-bottom:20px;padding-left:40px;padding-right:40px">
                                                      <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#666666;font-size:14px">Hello, ${name}!&nbsp;</p>
                                                      <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#666666;font-size:14px"><b>Tribal Legacy Tattoo</b>&nbsp;is established in 2021 in Ranchi, Jharkhand and been run by one of the professional tribal tattoo artist&nbsp;<b>Sanjay Bob</b>. The main key role of Tribal Legacy is to help you get a perfect creative/custom tattoo that represent your ideas, beliefs and memories.<br></p>
                                                      <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#666666;font-size:18px">details entered by you</p>
                                                      <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#666666;font-size:14px">e-mail- ${email}</p>
                                                      <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#666666;font-size:14px">contact no.- ${mobile}</p>
                                                      <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#666666;font-size:14px">message- ${message}</p>
                                                   </td>
                                                </tr>
                                                <tr>
                                                   <td align="center" class="es-m-txt-c" style="padding:0;Margin:0;padding-top:5px;padding-bottom:5px;font-size:0">
                                                      <table border="0" width="35%" height="100%" cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;display:inline-table;width:35% !important" role="presentation">
                                                         <tr>
                                                            <td style="padding:0;Margin:0;border-bottom:1px solid #fb8500;background:none;height:1px;width:100%;margin:0px"></td>
                                                         </tr>
                                                      </table>
                                                   </td>
                                                </tr>
                                                <tr>
                                                   <td align="center" class="es-m-txt-c" style="padding:0;Margin:0;padding-top:5px;padding-bottom:5px">
                                                      <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:40px;color:#666666;font-size:20px"><br></p>
                                                   </td>
                                                </tr>
                                             </table>
                                          </td>
                                       </tr>
                                    </table>
                                 </td>
                              </tr>
                              <tr>
                                 <td align="left" style="Margin:0;padding-top:10px;padding-bottom:40px;padding-left:40px;padding-right:40px">
                                    <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                       <tr>
                                          <td align="center" valign="top" style="padding:0;Margin:0;width:518px">
                                             <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                <tr>
                                                   <td align="center" style="padding:0;Margin:0;display:none"></td>
                                                </tr>
                                             </table>
                                          </td>
                                       </tr>
                                    </table>
                                 </td>
                              </tr>
                           </table>
                        </td>
                     </tr>
                  </table>
                  <table cellpadding="0" cellspacing="0" class="es-footer" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top">
                     <tr>
                        <td align="center" style="padding:0;Margin:0">
                           <table class="es-footer-body" align="center" cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px">
                              <tr>
                                 <td align="left" style="Margin:0;padding-left:20px;padding-right:20px;padding-top:25px;padding-bottom:25px;border-radius:0px 0px 10px 10px;background-color:#36454F" bgcolor="#36454F">
                                    <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                       <tr>
                                          <td align="left" style="padding:0;Margin:0;width:560px">
                                             <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                <tr>
                                                   <td align="center" style="padding:0;Margin:0;font-size:0">
                                                      <table cellpadding="0" cellspacing="0" class="es-table-not-adapt es-social" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                         <tr>
                                                            <td align="center" valign="top" style="padding:0;Margin:0;padding-right:20px"><a target="_blank" href="https://m.facebook.com/TribalLegacytattoo/?_rdr" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#CCCCCC;font-size:14px"><img title="Facebook" src="https://vwlbtp.stripocdn.email/content/assets/img/social-icons/circle-white/facebook-circle-white.png" alt="Fb" width="32" height="32" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a></td>
                                                            <td align="center" valign="top" style="padding:0;Margin:0;padding-right:20px"><a target="_blank" href="https://www.instagram.com/tribal_legacy_tattoo/" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#CCCCCC;font-size:14px"><img title="Instagram" src="https://vwlbtp.stripocdn.email/content/assets/img/social-icons/circle-white/instagram-circle-white.png" alt="Inst" width="32" height="32" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a></td>
                                                            <td align="center" valign="top" style="padding:0;Margin:0"><a target="_blank" href="https://www.youtube.com/watch?v=pAMk4eSyZSU" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#CCCCCC;font-size:14px"><img title="Youtube" src="https://vwlbtp.stripocdn.email/content/assets/img/social-icons/circle-white/youtube-circle-white.png" alt="Yt" width="32" height="32" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a></td>
                                                         </tr>
                                                      </table>
                                                   </td>
                                                </tr>
                                             </table>
                                          </td>
                                       </tr>
                                    </table>
                                 </td>
                              </tr>
                           </table>
                        </td>
                     </tr>
                  </table>
                  <table cellpadding="0" cellspacing="0" class="es-content" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
                     <tr>
                        <td class="es-info-area" align="center" style="padding:0;Margin:0">
                           <table class="es-content-body" align="center" cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px">
                              <tr>
                                 <td align="left" style="padding:20px;Margin:0">
                                    <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                       <tr>
                                          <td align="center" valign="top" style="padding:0;Margin:0;width:560px">
                                             <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                <tr>
                                                   <td align="center" style="padding:0;Margin:0;display:none"></td>
                                                </tr>
                                             </table>
                                          </td>
                                       </tr>
                                    </table>
                                 </td>
                              </tr>
                           </table>
                        </td>
                     </tr>
                  </table>
                  <table cellpadding="0" cellspacing="0" class="es-content" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
                     <tr>
                        <td align="center" style="padding:0;Margin:0">
                           <table class="es-content-body" align="center" cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px">
                              <tr>
                                 <td align="left" style="padding:20px;Margin:0">
                                    <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                       <tr>
                                          <td align="center" valign="top" style="padding:0;Margin:0;width:560px">
                                             <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                <tr>
                                                   <td align="center" style="padding:0;Margin:0;display:none"></td>
                                                </tr>
                                             </table>
                                          </td>
                                       </tr>
                                    </table>
                                 </td>
                              </tr>
                           </table>
                        </td>
                     </tr>
                  </table>
               </td>
            </tr>
         </table>
      </div>
   </body>
</html>
      `,
    };

    transporter.sendMail(mailOptions, function (err, data) {
      if (err) {
        console.log("erro ", err.message);
        return res.json({ result: false, error: err });
      } else {
        console.log("Message sent succefully ..", data);
        return res.json({ result: true, data: data });
      }
    });
  } catch (error) {
    console.log("herreeeee--------->>");
    res.status(400).json(error);
  }
});
module.exports = router;
