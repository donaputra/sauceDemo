package org.example.pageObject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage {
    public static WebDriver driver;

    public LoginPage(WebDriver driver){
        PageFactory.initElements(driver, this);
        this.driver = driver ;

    }

    //------------------------------------------BATAS---------------------------------------------//

    @FindBy(xpath = "//input[@id='user-name']")
    private WebElement userName;

    public void setUserName(String user){
        userName.sendKeys(user);
    }

    //------------------------------------------BATAS---------------------------------------------//

    @FindBy(xpath = "//input[@id='password']")
    private WebElement password;

    public void setPassword(String pwd){
        password.sendKeys(pwd);
    }

    //------------------------------------------BATAS---------------------------------------------//

    @FindBy(id = "login-button")
    private WebElement btnLogin;

    public void clickLogin(){
        btnLogin.click();
    }

    //------------------------------------------BATAS---------------------------------------------//

    @FindBy(id = "//h3")
    private WebElement errorText;

    public String getErrorText(){
        return errorText.getText();
    }

    //------------------------------------------BATAS---------------------------------------------//

    public boolean isDisplayed(){
        userName.isDisplayed();
    return true;
    }

}
